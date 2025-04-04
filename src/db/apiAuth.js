import supabase, { supabaseUrl } from "./supabase";

export async function login({ email, password }) {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error("Login error:", error.message);
      throw new Error("Failed to log in. Please check your credentials.");
    }

    return data;
  } catch (err) {
    console.error("Unexpected error during login:", err.message);
    throw new Error("An unexpected error occurred during login.");
  }
}

export async function getCurrentUser() {
  const { data: session, error } = await supabase.auth.getSession();
  if (!session.session) return null;
  if (error) throw new Error(error.message);
  return session.session?.user;
}

export async function signup({ name, email, password, profile_pic }) {
  const filename = `dp-${name.split(" ").join("-")}-${Math.random()}`;
  const { error: storageError } = await supabase.storage
    .from("profile-pic")
    .upload(filename, profile_pic);

  if (storageError) throw new Error(storageError.message);

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        name,
        profile_pic: `${supabaseUrl}/storage/v1/object/public/profile-pic/${filename}`,
      },
    },
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function logout() {
  const {error} = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}
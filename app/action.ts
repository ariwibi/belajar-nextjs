'use server'
 
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
 
export default async function revalidatePosts() {
  revalidatePath('posts')
  redirect('/posts')
}

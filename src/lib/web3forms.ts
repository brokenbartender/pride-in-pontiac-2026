export const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY as string;

export type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export async function submitForm(
  e: React.FormEvent<HTMLFormElement>
): Promise<{ success: boolean }> {
  const data = new FormData(e.currentTarget);
  const res = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    body: data,
  });
  const json = await res.json();
  return { success: json.success === true };
}

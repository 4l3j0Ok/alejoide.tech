declare module 'astro:env/client' {
	export const PUBLIC_EMAIL: string;	
}declare module 'astro:env/server' {
	export const SEND_EMAIL_FROM: string;	
	export const SEND_EMAIL_TO: string;	
	export const RESEND_API_KEY: string;	
}
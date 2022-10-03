import { useSession, signOut } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function useAuth(): string | null {
	const router = useRouter();
	const { status } = useSession();

	useEffect(() => {
		if (status === "unauthenticated") {
			void router.push("/login");
		}
	}, [status]);

	return status; // "authenticated" | "unauthenticated" | "loading"
}
// Global session composable managing authentication and subscription state (mock).

type SessionState = {
	isLoggedIn: boolean;
	hasActiveSubscription: boolean;
	userEmail: string | null;
};

export const useSession = () => {
	const state = useState<SessionState>("session", () => ({
		isLoggedIn: false,
		hasActiveSubscription: false,
		userEmail: null,
	}));

	const login = (email: string) => {
		state.value.isLoggedIn = true;
		state.value.userEmail = email;
	};

	const logout = () => {
		state.value.isLoggedIn = false;
		state.value.hasActiveSubscription = false;
		state.value.userEmail = null;
	};

	const setSubscriptionActive = (active: boolean) => {
		state.value.hasActiveSubscription = active;
	};

	return {
		state,
		login,
		logout,
		setSubscriptionActive,
	};
};

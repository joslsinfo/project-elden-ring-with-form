const useIsAuth = () => {
	const storage = localStorage;
	const key = "user";

	if (storage.getItem(key)) return true;

	return false;
};

export default useIsAuth;
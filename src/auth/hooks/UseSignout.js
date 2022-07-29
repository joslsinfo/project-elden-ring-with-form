import { useNavigate } from 'react-router-dom';

const useSignout = () => {
	const storage = localStorage;
	const key = "user";
	const navigate = useNavigate();

	return () => {
		storage.removeItem(key);
		navigate("/login");
	}
};

export default useSignout;
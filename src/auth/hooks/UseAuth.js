import { useNavigate } from 'react-router-dom';

const useAuth = () => {
	const storage = localStorage;
	const key = "user";
	const navigate = useNavigate();

	return () => {
		storage.setItem(key, 1);
		navigate('/elden');
	}
}

export default useAuth;
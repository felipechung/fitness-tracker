import { auth } from '../../config/firebase.config';

export const FitnessTracker = () => {
  const handleLogout = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div>
      <button onClick={handleLogout} type="button">
        Logout
      </button>
    </div>
  );
};

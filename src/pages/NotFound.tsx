import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../routes';

// NotFound component for displaying a 404 error page
export const NotFound = () => {
    const navigate = useNavigate(); // Hook for navigating to different pages

    return (
        // Main container with centered flexbox
        <div
            className="column centered flex-grow-[1] gap-5 text-black"
            role="main"
            aria-label="404 Not Found"
        >
            {/* Text explaining the issue to the user */}
            <div className="text-6xl font-bold" aria-live="assertive">
                Oops...
            </div>
            <div className="subtitle pb-0">
                The page you are looking for does not exist.
            </div>

            {/* Button to navigate back to home page */}
            <Button
                onClick={() => navigate(ROUTES.root)}
                aria-label="Return to Home Page"
            >
                Return Home
            </Button>
        </div>
    );
};

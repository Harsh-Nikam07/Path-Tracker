import { createNavigationContainerRef } from "@react-navigation/native";

export const navigationRef = createNavigationContainerRef();

export function navigate(name, params) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
<<<<<<< HEAD
}

export function navigateToSignup() {
  if (navigationRef.isReady()) {
    navigationRef.navigate('Signup');
  }
=======
>>>>>>> e291a27c1a827b8dc5395918e939590bdb040d0b
}
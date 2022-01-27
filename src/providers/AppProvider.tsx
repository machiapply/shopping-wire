import AuthProvider from './AuthProvider';

const AppProvider = ({ children }): JSX.Element => (
  <AuthProvider>
    {children}
  </AuthProvider>
);

export default AppProvider;

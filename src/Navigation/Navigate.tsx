import {StackNavigationProp, StackScreenProps} from '@react-navigation/stack';

type GoogleLoginProps = {};
type HomeProps = {};

export type MainStackParamList = {
  GoogleLogin: GoogleLoginProps | undefined;
  Home: HomeProps | undefined;
};

export type MainStackNavigation = StackNavigationProp<MainStackParamList>;

export type S = keyof MainStackParamList;

export type MainStackScreenProps<RouterName extends S> = StackScreenProps<
  MainStackParamList,
  RouterName
>;

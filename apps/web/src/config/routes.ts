export const ROUTES = {
  HOME: '/',
  PROFILE: (profileId: string) => `/profile/${profileId}`,
  PROFILE_SECTION: (profileId: string, section: string) => 
    `/profile/${profileId}#${section}`,
} as const

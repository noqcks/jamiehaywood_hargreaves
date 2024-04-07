import request from 'got';

export const postUsernameDob = async (
  hl_vt: string,
  username: string,
  dateOfBirth: string
) => {
  const { body } = await request.post(
    'https://online.hl.co.uk/my-accounts/login-step-one',
    {
      json: {
        hl_vt,
        username,
        'date-of-birth': dateOfBirth,
      },
      followRedirect: false,
    }
  );
  if (/try again/.test(body))
    throw new Error(
      'An error occurred with posting Username & DoB. Check these before continuing'
    );
  return Promise.resolve();
};

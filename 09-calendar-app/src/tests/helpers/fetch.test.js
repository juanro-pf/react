import '@testing-library/jest-dom';
import { fetchWithoutToken, fetchWithToken } from '../../helpers/fetch';

describe('Testing fetch', () => {
  
  let token= '';

  test('fetchWithoutToken should work', async () => {
    
    const resp= await fetchWithoutToken('auth', {
      email: 'jro@gmail.com',
      password: '123456'
    }, 'POST');

    // console.log(process.env.NODE_ENV);
    expect(resp instanceof Response).toBe(true);
    
    const body= await resp.json();

    expect(body.ok).toBe(true);

    token= body.token;

  });

  test('fetchWithToken should work', async () => {
    
    localStorage.setItem('token', token);

    const resp= await fetchWithToken('events/5f52e8934949780', {}, 'DELETE');
    const body= await resp.json();

    expect(body.msg).toBe('Contact Juan Ro');

  });
  
});

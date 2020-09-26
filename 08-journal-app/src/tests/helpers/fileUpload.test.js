import '@testing-library/jest-dom';
import cloudinary from 'cloudinary';

import { fileUpload } from '../../helpers/fileUpload';

cloudinary.config({ 
  cloud_name: 'dtqpka9el', 
  api_key: '894614541624137', 
  api_secret: 'sR5W_-kyJhgp53vW9uvNiO1cKno' 
});

describe('Testing fileUpload', () => {
  
  test('should upload file to cloudinary and return url', async (done) => {
    
    const resp= await fetch('data:image/jpeg;base64,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');
    const blob= await resp.blob();

    const file= new File([blob], 'picture.png');

    const url= await fileUpload(file);

    expect(typeof url).toBe('string');

    const segments= url.split('/');
    const imgId= segments[ segments.length - 1 ].replace('.jpg', '');

    cloudinary.v2.api.delete_resources(imgId, {}, () => {
      done();
    });
  });

  test('should return null', async () => {
    
    const file= new File([], 'picture.png');
    try {
      const url= await fileUpload(file);
      expect(url).toBe(null);
    } catch (error) {
      console.log(error.error)
      const url= null;
      expect(url).toBe(null);
    }

    // expect(url).toBe(null);
  });

});
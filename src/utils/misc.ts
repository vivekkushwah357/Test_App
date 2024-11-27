
import { decode } from 'base-64'

export const fonts = {
    PoppinsBlack: 'Poppins-Black',
    PoppinsBold: 'Poppins-Bold',
    PoppinsExBold: 'Poppins-ExtraBold',
    PoppinsExLight: 'Poppins-ExtraLight',
    PoppinsLight: 'Poppins-Light',
    PoppinsMedium: 'Poppins-Medium',
    PoppinsRegular: 'Poppins-Regular',
    PoppinsSemiB: 'Poppins-SemiBold',
    PoppinsThin: 'Poppins-Thin',
    QuicksandBold: 'Quicksand-Bold',
    QuicksandLight: 'Quicksand-Light',
    QuicksandMedium: 'Quicksand-Medium',
    QuicksandRegular: 'Quicksand-Regular',
    QuicksandSemi: 'Quicksand-SemiBold',
    RalewayBlack: 'Raleway-Black',
    RalewayBold: 'Raleway-Bold',
    RalewayExBold: 'Raleway-ExtraBold',
    RalewayExLight: 'Raleway-ExtraLight',
    RalewayLight: 'Raleway-Light',
    RalewayMedium: 'Raleway-Medium',
    RalewayRegular: 'Raleway-Regular',
    RalewaySemiB: 'Raleway-SemiBold',
    RalewayThin: 'Poppins-Thin',
}


// export function mediaImage(url: any) {
//     return `${API_URL}/public/uploads/${url}`
// }

export const dummyaAdd = {
    address_components: [
      { long_name: 'Bapat Square', short_name: 'Bapat Square', types: [Array] },
      { long_name: 'Sukhlia', short_name: 'Sukhlia', types: [Array] },
      { long_name: 'Indore', short_name: 'Indore', types: [Array] },
      { long_name: 'Indore', short_name: 'Indore', types: [Array] },
      {
        long_name: 'Indore Division',
        short_name: 'Indore Division',
        types: [Array],
      },
      { long_name: 'Madhya Pradesh', short_name: 'MP', types: [Array] },
      { long_name: 'India', short_name: 'IN', types: [Array] },
    ],
    adr_address:
      '<span class="street-address">Bapat Square</span>, <span class="extended-address">Sukhlia</span>, <span class="locality">Indore</span>, <span class="region">Madhya Pradesh</span>, <span class="country-name">India</span>',
    formatted_address: 'Bapat Square, Sukhlia, Indore, Madhya Pradesh, India',
    geometry: {
      location: { lat: 22.7550523, lng: 75.87837379999999 },
      viewport: { northeast: [Object], southwest: [Object] },
    },
    icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/geocode-71.png',
    icon_background_color: '#7B9EB0',
    icon_mask_base_uri:
      'https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet',
    name: 'Bapat Square',
    photos: [
      {
        height: 3468,
        html_attributions: [Array],
        photo_reference:
          'AUGGfZkhS1N_jcmq07AyuokIPiAfnE6v0i7dS5IbMK9yayDFIOtbmTwAjBr9hsbD_3UBlGje1ESuvCgE7mzrhpWUqRs413PmZ1XD6KAP-Bx6nna4DjrXUzviXZ_4nDguFhRMNeMzltn3QrAABUKFOuE4AtxrTinBsH-2G2I7Dh8-JuCRLXYC',
        width: 4624,
      },
      {
        height: 4624,
        html_attributions: [Array],
        photo_reference:
          'AUGGfZmmihEw7RTuVPo5QoGP9y3FIDUw0D_gyqvNlL4N5hN2rD4p3E0Q5yutj2qtpBFsqza3t0Lk9xD55jRIUBtmQURKu8Buod-NAU8wYV5pLIzISfIPrVhbhVCLqVLtTgrbvpv8rMQ1ar4kcZo4Za7rEspPQaitlB7CXcjfWlmAeEm3ivTZ',
        width: 3468,
      },
      {
        height: 2340,
        html_attributions: [Array],
        photo_reference:
          'AUGGfZlzJ1Bturi15FRv5HxRUM4OmCjLaD2dq4jTPOz0wdSqnpEwjW276xJCZODxmHwHbdbUDK9Rt4yMSU9UDUmCdZ7igkbVq6JnvNSqHX7gtvN3C53kkGkWiEMaQbjUwVgSupdS78uYZkSJXWzlPE801sOddhG5PFnUdmhNd6sPDyslTGMl',
        width: 4160,
      },
      {
        height: 1080,
        html_attributions: [Array],
        photo_reference:
          'AUGGfZmpiGVNuAm9vJijnT8VAcPY15uCZyoTWdBfP-6SxuT0eijkxaQY9lCzFUKg6HeP4caO6dOP6FhPlH7rMsmIKWG-XY2MZLMu9snUho6--aNDzV9chHlStCOCeealh5dM8nyAWYF9e0iyHuVTJt1l8Vm7i82VZrhkWRssNisxKANR20qU',
        width: 1920,
      },
      {
        height: 4624,
        html_attributions: [Array],
        photo_reference:
          'AUGGfZnYcQCjX7LatXFRoxVH7lyj46jQs_jGFGCaXc77cvay9g_BB_cKcqZ9xpmmIMPTmQ4PJSp07fMlnJUgzZYor2XrScomtL7hg2jO6qpNmHJ4aarAAsfMzFmqMlTRpgcSDbYyElRr-rPTn29s2u3b9lkigCJ_BKgXvyNFlYZ7pIzyzPu9',
        width: 3468,
      },
      {
        height: 4624,
        html_attributions: [Array],
        photo_reference:
          'AUGGfZkOTjbMsv50ZOD1rnA0SnlpUDKLnnFWYjCAWhXAngAR6oX1vYHKWcPNQ4ExaaHhXTtdvVeEUgzxkyc9M5UIJ7ZX2v-Vkv4rABh7PcHv3fT1Vm6rpKjGDo4gN5GeDjl8WfDdxKMPjNBnYspDQygXxp5jceEc0BrTuxj38apr42WD431m',
        width: 3468,
      },
      {
        height: 4096,
        html_attributions: [Array],
        photo_reference:
          'AUGGfZlYzjwFfXjTjBGvwSnab7I0nZwer1AN2UcwKTSrxHWfmAT7V5Vf3ClidbqF-6z0mp_JoChBmEz62j6ZDbv4BmvvprsPtVk-a6am2OlZv9CfNQ2S938CyZdeHRULNSaUyF8cngDPGy119aab2asGvHx4G9Ze_zJ0dmsobI7_crxGH4U2',
        width: 2304,
      },
      {
        height: 4160,
        html_attributions: [Array],
        photo_reference:
          'AUGGfZmRTSFLPk-W5ez969eCcuJ5Ufw4o1CQCppJG9GspE9R7UgTPkXYZ1UPrHzXQywuoZqCC_hIVYNeGfaEovGC2v-BX5ZXlejtOvCvVVnFesSjLyps6nMttTd4So2XxwJgtWiWkNzOoYtMJuYSuuonJlyqb7jLHmSpCKmVqO6kPosUv3P_',
        width: 3120,
      },
      {
        height: 3456,
        html_attributions: [Array],
        photo_reference:
          'AUGGfZnH-qjXB3C8wcC9qa-bjooSVTeQ3EBd93mgLfD_CfPyOe8PV4g9oAqsdVG6YPvb-lZmZHf11wahy5dH8hL3QEPQxvikHq44pe3Zw28NXIxpPDPu-pkl8TdMZiXup7ljwGRAJcHsYX2WBXPeVrOSpLLRNRM_OHUxOEzVFNgfdAvJdr9t',
        width: 4608,
      },
      {
        height: 2340,
        html_attributions: [Array],
        photo_reference:
          'AUGGfZkdgTu22_BHEDx-FSquWpjiKSLMNDh4rXTncOHhABNJ7IkC-d7vGnjmQBEFbY4owMMsr-4nKLufYB9mvqZg1Oq4_KB6E_3-1W-aubqhawhRo1NL6ovBmmDFzPG2NJB0H3UOGvwYSPpDXs2WlHWaymhxGFHgjVlkZjcwAK_c4hOjeIrR',
        width: 4160,
      },
    ],
    place_id:
      'EjRCYXBhdCBTcXVhcmUsIFN1a2hsaWEsIEluZG9yZSwgTWFkaHlhIFByYWRlc2gsIEluZGlhIi4qLAoUChIJo1ZLI6ICYzkRW0lyBx9mO4YSFAoSCR_IoySFAmM5ER5P5OjuXYfb',
    reference:
      'EjRCYXBhdCBTcXVhcmUsIFN1a2hsaWEsIEluZG9yZSwgTWFkaHlhIFByYWRlc2gsIEluZGlhIi4qLAoUChIJo1ZLI6ICYzkRW0lyBx9mO4YSFAoSCR_IoySFAmM5ER5P5OjuXYfb',
    types: ['route'],
    url: 'https://maps.google.com/?q=Bapat+Square,+Sukhlia,+Indore,+Madhya+Pradesh,+India&ftid=0x396302a2234b56a3:0x863b661f0772495b',
    utc_offset: 330,
    vicinity: 'Sukhlia',
  };
  
  
  export function renderHtmlCode(content: any, status: string) {
    const htmlContent = `<div>${content}</div`;
  
    // Use regular expressions to remove HTML tags
    const strippedContent = htmlContent.replace(/<[^>]*>?/gm, '');
  
    // Extract the first three words
    const words = strippedContent.split(' ').slice(0, 3).join(' ');
    const words1 = strippedContent.split(' ').slice(3, strippedContent.length - 1).join(' ');
    if(status == 'before'){
      return words 
    }else {
      return words1
    }
  }

  export async function DecodeTokenApple(authToken: any) {
    const decodeToken = (token: any) => {
      const parts = token.split('.');
      if (parts.length !== 3) {
        throw new Error('Invalid token format');
      }
      const payload = parts[1];
      // Manually decode the payload using the base64 decoding function
      const decodedPayload = decode(payload, 'base64');
      // Parse the decoded payload as JSON
      return JSON.parse(decodedPayload);
    };
  
    try {
      const decoded = decodeToken(authToken);
      console.log('Decoded token:', decoded);
      return decoded;
    } catch (error) {
      console.error('Error decoding token:', error);
      throw error;
    }
  }
/** Verified Google Business Profile reviews. Texts are kept verbatim in their original language. */

export interface Review {
  author: string;
  featured: boolean;
  text: string;
  lang: string;
}

export interface ReviewSummary {
  rating: number;
  total: number;
  url: string;
  reviews: Review[];
}

export const googleReviews: ReviewSummary = {
  rating: 5.0,
  total: 11,
  url: 'https://maps.app.goo.gl/DaCMiAwSyeWQKWUCA',
  reviews: [
    {
      author: 'Natascha Marcon',
      featured: true,
      lang: 'de',
      text: 'Das Shooting war äusserst professionell und fand in einer entspannten, angenehmen Atmosphäre statt. Man fühlt sich von Anfang an gut aufgehoben und kann sich voll und ganz auf das Erlebnis einlassen.',
    },
    {
      author: 'Happy Tour Switzerland',
      featured: true,
      lang: 'de',
      text: 'Hr Javi macht einen excellenten super Job. Schnell und  sehr, sehr, zuverlaessig. Gerne wieder und weiter zu empfehlen.',
    },
    {
      author: 'Giuseppe Caponetto',
      featured: true,
      lang: 'en',
      text: 'The photoshooting I did with my wife was a real pleasure and the result an eye candy! I enjoyed the relaxed setting, natural flow of the conversations and shots. I got to geek out a bit on technique and equipment since I am a curious person. Javi gave us tips to get our most natural an relaxed facial expression, that we will carry beyond this one shooting.',
    },
    {
      author: 'Miti Mito',
      featured: true,
      lang: 'en',
      text: 'Javi was amazing! Super professional but also really kind and patient. He made sure I felt comfortable the whole time, which made the experience so much more enjoyable. The photos turned out great—highly recommend ☺️',
    },
    {
      author: 'Ірина Бердник',
      featured: false,
      lang: 'en',
      text: 'I had so nice and relaxed shooting with Javi. He is so professional, friendly and nice person',
    },
  ],
};

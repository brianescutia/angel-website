// Real C.A.T.A. community photography (in /public/images).
// Shared across both languages so captions live in content.js, paths live here.
//
// Note on orientation: several phone photos carry EXIF rotation. Browsers honor
// EXIF orientation for <img> elements but NOT for CSS background-image. Every
// photo below is rendered through an <img> (object-fit: cover) so all of them
// display upright. Do not move these into CSS `background-image`.

const base = '/images'

export const images = {
  // Naturally-landscape, high-impact shots
  heroTeam: `${base}/IMG_3912.jpeg`,        // sunny full-team group portrait
  groupIndoor: `${base}/IMG_3689.jpeg`,     // large indoor group portrait
  workshopClimate: `${base}/DDA45AFA-DD9D-4FDF-9D5B-3CD2130E9C5E.jpeg`, // bilingual climate workshop
  groupOutdoor: `${base}/IMG_3583.jpeg`,    // community gathered under a tree
  womenChild: `${base}/IMG_3694.jpeg`,      // women and a child at an event

  // Brand / outreach moments (the real C.A.T.A. banner + tabling)
  bannerFamily: `${base}/IMG_4108.jpeg`,    // mother + child at the C.A.T.A. table
  bannerTable: `${base}/IMG_3892.jpeg`,     // the C.A.T.A. banner up close
  outreachFair: `${base}/IMG_3895.jpeg`,    // outreach table at an outdoor fair
  seatedMeeting: `${base}/IMG_4099.jpeg`,   // members seated at a meeting
  readingFlyer: `${base}/IMG_4118.jpeg`,    // a member reading a C.A.T.A. flyer
}

// Ordered set for the editorial gallery grid.
export const galleryOrder = [
  'heroTeam',
  'groupIndoor',
  'workshopClimate',
  'bannerFamily',
  'groupOutdoor',
  'outreachFair',
  'womenChild',
  'seatedMeeting',
  'readingFlyer',
  'bannerTable',
]

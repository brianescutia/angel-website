// Real C.A.T.A. community photography.
//
// Note on orientation: several phone photos carry EXIF rotation. Browsers honor
// EXIF orientation for <img> elements but NOT for CSS background-image. Every
// photo below is rendered through an <img> (object-fit: cover) so all of them
// display upright. Do not move these into CSS `background-image`.

// Fixed section photos (hero, mission, impact, programs) live in /public/images.
const base = '/images'

export const images = {
  heroTeam: `${base}/IMG_3912.jpeg`,        // sunny full-team group portrait
  groupIndoor: `${base}/IMG_3689.jpeg`,     // large indoor group portrait
  workshopClimate: `${base}/DDA45AFA-DD9D-4FDF-9D5B-3CD2130E9C5E.jpeg`, // bilingual climate workshop
  bannerFamily: `${base}/IMG_4108.jpeg`,    // mother + child at the C.A.T.A. table
}

// Gallery photos are read automatically from /gallery-photos, so non-developers
// can add or delete photos by uploading/removing files there on GitHub — no code
// edits. Photos appear in filename order (01-, 02-, ...).
const galleryModules = import.meta.glob(
  '/gallery-photos/*.{jpg,jpeg,png,webp,gif,avif,JPG,JPEG,PNG,WEBP,GIF,AVIF}',
  { eager: true, query: '?url', import: 'default' }
)

export const galleryImages = Object.keys(galleryModules)
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }))
  .map((path) => galleryModules[path])

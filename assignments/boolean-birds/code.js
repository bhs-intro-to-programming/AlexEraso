/*
 * Important facts about the birds of Booleana.
 *
 * Coloration and markings:
 *
 *   - Flobby Birds and Bloggy Birds are red.
 *   - Flibble Birds and Globby Birds are not red.
 *   - Flobby Birds and Flibble Birds are spotted.
 *   - Bloggy Birds and Globby Birds are not spotted.
 *
 * Diet:
 *
 *   - Flobby Birds eat fish, nuts, and worms.
 *   - Bloggy Birds eat mice, nuts, and worms.
 *   - Flibble Birds eat fish, mice, and worms.
 *   - Globby Birds eat fish, mice, and nuts.
 *
 */

const isFlobbyBird = (red, spotted) => red && spotted;

const isBloggyBird = (red, spotted) => red && !spotted;

const isFlibbleBird = (red, spotted) => !red && spotted;

const isGlobbyBird = (red, spotted) => !red && !spotted;

const eatsWorms = (red, spotted) => red || spotted;

const eatsNuts = (red, spotted) => red && spotted || red && !spotted || !red && !spotted;

const eatsFish = (red, spotted) => red && spotted || !red && !spotted || !red && spotted;

const eatsMice = (red, spotted) => red && !spotted || !red && !spotted || !red && spotted;

const isRed = (bird) => bird === 'Flobby' || bird === 'Bloggy';

const isSpotted = (bird) => bird === 'Flobby' || bird === 'Flibble';

const isNotRed = (bird) => bird === 'Flibble' || bird === 'Globby';

const isNotSpotted = (bird) => bird === 'Bloggy' || bird === 'Globby'; 
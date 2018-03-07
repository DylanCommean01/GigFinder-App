import * as baseService from './base';


async function getArtistLocation(location) {
    return baseService.get(`/api/artist/` + location);
}

async function getArtistInstrument(instrument) {
    return baseService.get(`/api/artist/instrument/` + instrument);
}

async function getArtist(location, instrument) {
    return
    baseService.getMore(`/api/artist/both/`, { location: location, instrument: instrument });
    // baseService.get(`/api/artist/instrument/` + instrument);
}

export { getArtistLocation, getArtistInstrument, getArtist };
function gramophone(bandName, albumName, songFromAlbum) {

    let plateRPM = 2.5;

    let songDuration = (albumName.length * bandName.length) * songFromAlbum.length / 2;

    console.log(`The plate was rotated ${Math.ceil(songDuration / plateRPM)} times.`);
}
gramophone('Black Sabbath', 'Paranoid', 'War Pigs');
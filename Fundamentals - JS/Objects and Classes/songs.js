function songs(input) {

    class Song {
        constructor(type, name, length) {
            this.type = type;
            this.name = name;
            this.length = length;
        }
    }
    let numOfSongs = input.shift();
    let valueOfLastElement = input.pop();


    for (let i = 0; i < numOfSongs; i++) {
        let token = input[i].split('_');
        let typeOfSong = token[0];
        let nameOfSong = token[1];
        let lengthOfSong = token[2];

        let SongsList = new Song(typeOfSong, nameOfSong, lengthOfSong);

        if (valueOfLastElement === 'all') {
            console.log(SongsList.name);
        } else if (valueOfLastElement === SongsList.type) {
            console.log(SongsList.name);
        }
    }

}
songs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']

)
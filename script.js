// Mock music data used by the app
const songs = [
  {
    id: 1,
    title: 'Neon Skyline',
    artist: 'Luna Echo',
    duration: '3:58',
    image: 'https://images.unsplash.com/photo-1523905330026-b0a9359ccbc3?auto=format&fit=crop&w=600&q=80',
    audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    playlist: 'Today’s Top Hits',
    liked: false
  },
  {
    id: 2,
    title: 'Velvet Waves',
    artist: 'Aurora Minor',
    duration: '4:22',
    image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80',
    audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    playlist: 'Chill Vibes',
    liked: true
  },
  {
    id: 3,
    title: 'Sidewalk Rhythm',
    artist: 'The Metro',
    duration: '3:16',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80',
    audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    playlist: 'Late Nights',
    liked: false
  },
  {
    id: 4,
    title: 'Echoes of Tomorrow',
    artist: 'Sky Line',
    duration: '5:03',
    image: 'https://images.unsplash.com/photo-1511376777868-611b54f68947?auto=format&fit=crop&w=600&q=80',
    audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
    playlist: 'Rap Caviar',
    liked: false
  },
  {
    id: 5,
    title: 'Midnight Pulse',
    artist: 'Nova Dream',
    duration: '3:44',
    image: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=600&q=80',
    audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
    playlist: 'Electronic Essentials',
    liked: true
  },
  {
    id: 6,
    title: 'Solar Anthem',
    artist: 'Pulse Drive',
    duration: '3:35',
    image: 'https://images.unsplash.com/photo-1497032205916-ac775f0649ae?auto=format&fit=crop&w=600&q=80',
    audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3',
    playlist: 'Mood Booster',
    liked: false
  },
  {
    id: 7,
    title: 'City Lights',
    artist: 'Midnight Frame',
    duration: '4:05',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80',
    audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3',
    playlist: 'Today’s Top Hits',
    liked: false
  },
  {
    id: 8,
    title: 'Golden Hour',
    artist: 'Stereo Bloom',
    duration: '3:48',
    image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=600&q=80',
    audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3',
    playlist: 'Chill Vibes',
    liked: true
  },
  {
    id: 9,
    title: 'Digital Heart',
    artist: 'Orion Skies',
    duration: '4:14',
    image: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=600&q=80',
    audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3',
    playlist: 'Electronic Essentials',
    liked: false
  },
  {
    id: 10,
    title: 'Afterglow',
    artist: 'Echo Lane',
    duration: '3:50',
    image: 'https://images.unsplash.com/photo-1523905330026-b0a9359ccbc3?auto=format&fit=crop&w=600&q=80',
    audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3',
    playlist: 'Late Nights',
    liked: false
  }
];

const playlists = [
  { id: 1, name: 'Today’s Top Hits', description: 'Hit singles you can’t miss', image: 'https://images.unsplash.com/photo-1511376777868-611b54f68947?auto=format&fit=crop&w=400&q=80' },
  { id: 2, name: 'Rap Caviar', description: 'Hard-hitting rap tracks', image: 'https://images.unsplash.com/photo-1531251445707-1f000e1e87d0?auto=format&fit=crop&w=400&q=80' },
  { id: 3, name: 'Chill Vibes', description: 'Relaxed modern grooves', image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80' },
  { id: 4, name: 'Mood Booster', description: 'Feel-good pop anthems', image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=400&q=80' },
  { id: 5, name: 'Late Nights', description: 'Smooth evening tracks', image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80' },
  { id: 6, name: 'Electronic Essentials', description: 'Fresh electronic beats', image: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=400&q=80' }
];

const artists = [
  { name: 'Luna Echo', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80' },
  { name: 'Aurora Minor', image: 'https://images.unsplash.com/photo-1531251445707-1f000e1e87d0?auto=format&fit=crop&w=400&q=80' },
  { name: 'The Metro', image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80' },
  { name: 'Nova Dream', image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80' }
];

const elements = {
  sidebarPlaylists: document.getElementById('sidebar-playlists'),
  createPlaylistBtn: document.getElementById('create-playlist-btn'),
  recentGrid: document.getElementById('recent-grid'),
  trendingGrid: document.getElementById('trending-grid'),
  songList: document.getElementById('song-list'),
  artistGrid: document.getElementById('artist-grid'),
  searchInput: document.getElementById('search-input'),
  playerImage: document.getElementById('player-image'),
  playerTitle: document.getElementById('player-title'),
  playerArtist: document.getElementById('player-artist'),
  playPauseBtn: document.getElementById('play-pause-btn'),
  prevBtn: document.getElementById('prev-btn'),
  nextBtn: document.getElementById('next-btn'),
  shuffleBtn: document.getElementById('shuffle-btn'),
  repeatBtn: document.getElementById('repeat-btn'),
  volumeSlider: document.getElementById('volume-slider'),
  progressBar: document.getElementById('progress-bar'),
  currentTime: document.getElementById('current-time'),
  totalDuration: document.getElementById('total-duration'),
  audioPlayer: document.getElementById('audio-player')
};

let currentIndex = 0;
let isPlaying = false;
let isShuffle = false;
let repeatMode = 'off';
let activePlaylist = null;
let filteredSongs = [...songs];

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60).toString().padStart(2, '0');
  return `${minutes}:${secs}`;
}

function renderSidebarPlaylists(data) {
  elements.sidebarPlaylists.innerHTML = data.map((playlist) => {
    return `
      <button data-playlist="${playlist.name}" class="group flex w-full items-center gap-3 rounded-3xl bg-white/5 px-4 py-3 text-left transition hover:bg-white/10">
        <img src="${playlist.image}" alt="${playlist.name}" class="h-12 w-12 rounded-2xl object-cover shadow-soft" />
        <div>
          <p class="font-semibold">${playlist.name}</p>
          <p class="text-xs text-white/50">${playlist.description}</p>
        </div>
      </button>
    `;
  }).join('');
}

function renderRecentCards(data) {
  elements.recentGrid.innerHTML = data.slice(0, 4).map((song) => {
    return `
      <article class="group rounded-3xl bg-white/5 p-4 transition hover:-translate-y-1 hover:bg-white/10">
        <img src="${song.image}" alt="${song.title}" class="h-40 w-full rounded-3xl object-cover shadow-soft" />
        <div class="mt-4 flex items-start justify-between gap-3">
          <div>
            <h3 class="font-semibold">${song.title}</h3>
            <p class="mt-1 text-sm text-white/60">${song.artist}</p>
          </div>
          <button data-id="${song.id}" class="inline-flex h-11 w-11 items-center justify-center rounded-full bg-green-500 text-black transition hover:scale-105">▶</button>
        </div>
      </article>
    `;
  }).join('');
}

function renderTrendingPlaylists(data) {
  elements.trendingGrid.innerHTML = data.slice(0, 4).map((playlist) => {
    return `
      <article class="group rounded-3xl bg-white/5 p-4 transition hover:-translate-y-1 hover:bg-white/10">
        <div class="mb-4 flex h-40 items-end overflow-hidden rounded-3xl bg-gradient-to-br from-green-500/20 to-transparent">
          <img src="${playlist.image}" alt="${playlist.name}" class="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        </div>
        <p class="text-xs uppercase tracking-[0.25em] text-white/50">Playlist</p>
        <h3 class="mt-3 text-lg font-semibold">${playlist.name}</h3>
        <p class="mt-2 text-sm text-white/60">${playlist.description}</p>
      </article>
    `;
  }).join('');
}

function renderArtistCards(data) {
  elements.artistGrid.innerHTML = data.map((artist) => {
    return `
      <article class="group flex items-center gap-4 rounded-3xl bg-white/5 p-4 transition hover:bg-white/10">
        <img src="${artist.image}" alt="${artist.name}" class="h-16 w-16 rounded-full object-cover shadow-soft" />
        <div>
          <h4 class="font-semibold">${artist.name}</h4>
          <p class="text-xs text-white/50">Artist</p>
        </div>
      </article>
    `;
  }).join('');
}

function renderSongList(data) {
  if (data.length === 0) {
    elements.songList.innerHTML = `
      <div class="rounded-3xl bg-white/5 p-8 text-center text-white/60">
        <p class="text-sm">No songs found. Try a different search term or clear the filter.</p>
      </div>
    `;
    return;
  }

  elements.songList.innerHTML = data.map((song) => {
    const activeClass = filteredSongs[currentIndex] && song.id === filteredSongs[currentIndex].id ? 'bg-white/10' : 'bg-white/5';
    const likedIcon = song.liked ? '♥' : '♡';
    return `
      <div data-id="${song.id}" class="group flex items-center justify-between gap-4 rounded-3xl ${activeClass} p-4 transition hover:bg-white/10">
        <div class="flex items-center gap-4">
          <img src="${song.image}" alt="${song.title}" class="h-16 w-16 rounded-2xl object-cover" />
          <div>
            <h4 class="font-semibold">${song.title}</h4>
            <p class="mt-1 text-sm text-white/60">${song.artist}</p>
          </div>
        </div>
        <div class="flex items-center gap-4 text-sm text-white/60">
          <button data-like="${song.id}" class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20">${likedIcon}</button>
          <span>${song.duration}</span>
        </div>
      </div>
    `;
  }).join('');
}

function loadSong(index) {
  const song = filteredSongs[index];
  if (!song) {
    elements.audioPlayer.removeAttribute('src');
    elements.playerImage.src = 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80';
    elements.playerTitle.textContent = 'Select a song';
    elements.playerArtist.textContent = 'Waiting to play';
    updateSongHighlights();
    return;
  }

  currentIndex = index;
  elements.audioPlayer.src = song.audio;
  elements.playerImage.src = song.image;
  elements.playerTitle.textContent = song.title;
  elements.playerArtist.textContent = song.artist;
  updateSongHighlights();
  elements.audioPlayer.load();
}

function playSong() {
  elements.audioPlayer.play();
  isPlaying = true;
  elements.playPauseBtn.textContent = '⏸';
}

function pauseSong() {
  elements.audioPlayer.pause();
  isPlaying = false;
  elements.playPauseBtn.textContent = '▶';
}

function togglePlayPause() {
  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
}

function nextSong() {
  if (isShuffle) {
    currentIndex = Math.floor(Math.random() * filteredSongs.length);
  } else {
    currentIndex = (currentIndex + 1) % filteredSongs.length;
  }
  loadSong(currentIndex);
  playSong();
}

function prevSong() {
  currentIndex = (currentIndex - 1 + filteredSongs.length) % filteredSongs.length;
  loadSong(currentIndex);
  playSong();
}

function updateProgress() {
  if (!elements.audioPlayer.duration) return;
  const progressPercent = (elements.audioPlayer.currentTime / elements.audioPlayer.duration) * 100;
  elements.progressBar.style.width = `${progressPercent}%`;
  elements.currentTime.textContent = formatTime(elements.audioPlayer.currentTime);
  elements.totalDuration.textContent = formatTime(elements.audioPlayer.duration);
}

function setProgress(event) {
  const width = event.currentTarget.clientWidth;
  const clickX = event.offsetX;
  const duration = elements.audioPlayer.duration;
  if (!duration) return;
  elements.audioPlayer.currentTime = (clickX / width) * duration;
}

function toggleShuffle() {
  isShuffle = !isShuffle;
  elements.shuffleBtn.classList.toggle('bg-green-500', isShuffle);
  elements.shuffleBtn.classList.toggle('text-black', isShuffle);
}

function toggleRepeat() {
  if (repeatMode === 'off') repeatMode = 'one';
  else if (repeatMode === 'one') repeatMode = 'all';
  else repeatMode = 'off';

  elements.repeatBtn.textContent = repeatMode === 'one' ? '①' : '⟳';
  elements.repeatBtn.classList.toggle('bg-green-500', repeatMode !== 'off');
  elements.repeatBtn.classList.toggle('text-black', repeatMode !== 'off');
}

function handleSongEnd() {
  if (repeatMode === 'one') {
    elements.audioPlayer.currentTime = 0;
    playSong();
    return;
  }
  if (repeatMode === 'all') {
    nextSong();
    return;
  }
  if (currentIndex < filteredSongs.length - 1) {
    nextSong();
  } else {
    pauseSong();
  }
}

function updateSongHighlights() {
  const songCards = document.querySelectorAll('[data-id]');
  songCards.forEach((card) => {
    const songId = Number(card.dataset.id);
    card.classList.toggle('bg-white/10', songId === filteredSongs[currentIndex]?.id);
    card.classList.toggle('bg-white/5', songId !== filteredSongs[currentIndex]?.id);
  });
}

function createPlaylist() {
  const name = prompt('Name your new playlist');
  if (!name || !name.trim()) return;

  playlists.unshift({
    id: Date.now(),
    name: name.trim(),
    description: 'Custom playlist',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80'
  });
  renderSidebarPlaylists(playlists);
}

function filterData(query) {
  const normalizedQuery = query.trim().toLowerCase();
  if (!normalizedQuery) {
    filteredSongs = [...songs];
    renderSidebarPlaylists(playlists);
  } else {
    filteredSongs = songs.filter(song => {
      return [song.title, song.artist, song.playlist].some(value => value.toLowerCase().includes(normalizedQuery));
    });
    const matchingPlaylistNames = new Set(filteredSongs.map(song => song.playlist));
    const filteredPlaylists = playlists.filter(playlist => playlist.name.toLowerCase().includes(normalizedQuery) || matchingPlaylistNames.has(playlist.name));
    renderSidebarPlaylists(filteredPlaylists);
  }
  renderSongList(filteredSongs);
}

function assignEvents() {
  elements.playPauseBtn.addEventListener('click', togglePlayPause);
  elements.prevBtn.addEventListener('click', prevSong);
  elements.nextBtn.addEventListener('click', nextSong);
  elements.shuffleBtn.addEventListener('click', toggleShuffle);
  elements.repeatBtn.addEventListener('click', toggleRepeat);
  elements.volumeSlider.addEventListener('input', (event) => {
    elements.audioPlayer.volume = event.target.value / 100;
  });
  elements.audioPlayer.addEventListener('timeupdate', updateProgress);
  elements.audioPlayer.addEventListener('loadedmetadata', updateProgress);
  elements.audioPlayer.addEventListener('ended', handleSongEnd);
  elements.createPlaylistBtn.addEventListener('click', createPlaylist);

  document.body.addEventListener('click', (event) => {
    const likeButton = event.target.closest('[data-like]');
    if (likeButton) {
      const id = Number(likeButton.dataset.like);
      const song = songs.find(item => item.id === id);
      if (song) {
        song.liked = !song.liked;
        renderSongList(filteredSongs);
      }
      return;
    }

    const playlistButton = event.target.closest('[data-playlist]');
    if (playlistButton) {
      const playlistName = playlistButton.dataset.playlist;
      activePlaylist = playlistName;
      filteredSongs = songs.filter(song => song.playlist === playlistName);
      currentIndex = 0;
      loadSong(currentIndex);
      playSong();
      renderSongList(filteredSongs);
      return;
    }

    const songButton = event.target.closest('[data-id]');
    if (songButton) {
      const id = Number(songButton.dataset.id);
      const index = filteredSongs.findIndex(item => item.id === id);
      if (index >= 0) {
        loadSong(index);
        playSong();
      }
    }
  });

  elements.searchInput.addEventListener('input', (event) => {
    filterData(event.target.value);
  });

  const progressContainer = elements.progressBar.parentElement;
  progressContainer.addEventListener('click', setProgress);
}

function initializeApp() {
  renderSidebarPlaylists(playlists);
  renderRecentCards(songs);
  renderTrendingPlaylists(playlists);
  renderArtistCards(artists);
  renderSongList(filteredSongs);
  elements.audioPlayer.volume = 0.7;
  loadSong(0);
  assignEvents();
}

window.addEventListener('DOMContentLoaded', initializeApp);

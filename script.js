// Mock music data used by the app
// Each song contains the title, artist, duration, image, audio source, playlist, and like state.
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
  },
  {
    id: 11,
    title: 'Wildflower',
    artist: 'Billie Eilish',
    duration: '3:40',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80',
    audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    playlist: 'Chill Vibes',
    liked: false
  }
];

const STORAGE_KEY = 'spotifyClonePlaylists';

function loadPlaylists() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    return [];
  }
}

function savePlaylists() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(userPlaylists));
}

const elements = {
  sidebarPlaylists: document.getElementById('sidebar-playlists'),
  createPlaylistBtn: document.getElementById('create-playlist-btn'),
  navHome: document.getElementById('nav-home'),
  navLibrary: document.getElementById('nav-library'),
  homeView: document.getElementById('home-view'),
  libraryView: document.getElementById('library-view'),
  playlistEditor: document.getElementById('playlist-editor'),
  playlistDetailView: document.getElementById('playlist-detail-view'),
  libraryCreateBtn: document.getElementById('library-create-btn'),
  libraryPlaylists: document.getElementById('library-playlists'),
  playlistNameInput: document.getElementById('playlist-name-input'),
  playlistSearchInput: document.getElementById('playlist-search-input'),
  playlistSongSelection: document.getElementById('playlist-song-selection'),
  savePlaylistBtn: document.getElementById('save-playlist-btn'),
  cancelPlaylistBtn: document.getElementById('cancel-playlist-btn'),
  detailPlaylistName: document.getElementById('detail-playlist-name'),
  playPlaylistBtn: document.getElementById('play-playlist-btn'),
  renamePlaylistBtn: document.getElementById('rename-playlist-btn'),
  backToLibraryBtn: document.getElementById('back-to-library-btn'),
  playlistSongsList: document.getElementById('playlist-songs-list'),
  recentSection: document.getElementById('recent-section'),
  trendingSection: document.getElementById('trending-section'),
  artistSection: document.getElementById('artist-section'),
  songSectionTitle: document.getElementById('song-section-title'),
  songSectionSubtitle: document.getElementById('song-section-subtitle'),
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

let userPlaylists = loadPlaylists();
let currentView = 'home';
let currentSongList = [...songs];
let currentIndex = 0;
let isPlaying = false;
let isShuffle = false;
let repeatMode = 'off';
let selectedSongIds = new Set();
let editorFilteredSongs = [...songs];
let currentPlaylistDetailId = null;

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60).toString().padStart(2, '0');
  return `${minutes}:${secs}`;
}

function renderSidebarPlaylists() {
  if (userPlaylists.length === 0) {
    elements.sidebarPlaylists.innerHTML = `
      <div class="rounded-3xl bg-white/5 p-4 text-sm text-white/60">
        No playlists yet. Create one to see it listed here.
      </div>
    `;
    return;
  }

  elements.sidebarPlaylists.innerHTML = userPlaylists.map((playlist) => {
    return `
      <button data-playlist-id="${playlist.id}" class="group flex w-full items-center gap-3 rounded-3xl bg-white/5 px-4 py-3 text-left transition hover:bg-white/10">
        <div class="h-12 w-12 rounded-2xl bg-white/10 p-2 text-center text-lg text-green-500">P</div>
        <div>
          <p class="font-semibold">${playlist.name}</p>
          <p class="text-xs text-white/50">${playlist.songIds.length} songs</p>
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
          <button data-song-id="${song.id}" class="inline-flex h-11 w-11 items-center justify-center rounded-full bg-green-500 text-black transition hover:scale-105">▶</button>
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
    const activeClass = currentSongList[currentIndex]?.id === song.id ? 'bg-white/10' : 'bg-white/5';
    const likedIcon = song.liked ? '♥' : '♡';
    return `
      <div data-song-id="${song.id}" class="group flex items-center justify-between gap-4 rounded-3xl ${activeClass} p-4 transition hover:bg-white/10">
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

function renderPlaylistEditorSongs(query = '') {
  const normalizedQuery = query.trim().toLowerCase();
  editorFilteredSongs = songs.filter((song) => {
    if (!normalizedQuery) return true;
    return [song.title, song.artist, song.playlist].some((value) => value.toLowerCase().includes(normalizedQuery));
  });

  if (editorFilteredSongs.length === 0) {
    elements.playlistSongSelection.innerHTML = `
      <div class="rounded-3xl bg-white/5 p-6 text-center text-white/60">
        No matching songs found.
      </div>
    `;
    return;
  }

  elements.playlistSongSelection.innerHTML = editorFilteredSongs.map((song) => {
    const checked = selectedSongIds.has(song.id) ? 'checked' : '';
    return `
      <label class="flex cursor-pointer items-center gap-4 rounded-3xl bg-white/5 p-4 transition hover:bg-white/10">
        <input type="checkbox" data-song-id="${song.id}" ${checked} class="h-5 w-5 rounded border-white/20 text-green-500 focus:ring-green-500" />
        <div class="flex-1">
          <div class="flex items-center gap-4">
            <img src="${song.image}" alt="${song.title}" class="h-16 w-16 rounded-2xl object-cover" />
            <div>
              <p class="font-semibold">${song.title}</p>
              <p class="text-sm text-white/60">${song.artist}</p>
            </div>
          </div>
        </div>
        <div class="text-sm text-white/60">${song.duration}</div>
      </label>
    `;
  }).join('');
}

function renderLibraryPlaylists() {
  if (userPlaylists.length === 0) {
    elements.libraryPlaylists.innerHTML = `
      <div class="rounded-3xl bg-white/5 p-8 text-center text-white/60">
        <p class="text-sm">No playlists created yet. Tap Create Playlist to start.</p>
      </div>
    `;
    return;
  }

  elements.libraryPlaylists.innerHTML = userPlaylists.map((playlist) => {
    return `
      <article class="group rounded-3xl bg-white/5 p-5 transition hover:bg-white/10">
        <div class="flex items-center justify-between gap-4">
          <div>
            <p class="text-sm uppercase tracking-[0.2em] text-white/50">Playlist</p>
            <h3 class="mt-2 text-xl font-semibold">${playlist.name}</h3>
          </div>
          <div class="text-right text-sm text-white/60">${playlist.songIds.length} songs</div>
        </div>
        <div class="mt-5 flex flex-wrap gap-3">
          <button data-playlist-action="view" data-playlist-id="${playlist.id}" class="rounded-full bg-white/10 px-4 py-2 text-sm transition hover:bg-white/20">Open</button>
          <button data-playlist-action="play" data-playlist-id="${playlist.id}" class="rounded-full bg-green-500 px-4 py-2 text-sm font-semibold text-black transition hover:bg-green-400">Play</button>
        </div>
      </article>
    `;
  }).join('');
}

function renderPlaylistDetail(id) {
  const playlist = userPlaylists.find((item) => item.id === id);
  if (!playlist) return;

  currentPlaylistDetailId = id;
  elements.detailPlaylistName.textContent = playlist.name;

  if (playlist.songIds.length === 0) {
    elements.playlistSongsList.innerHTML = `
      <div class="rounded-3xl bg-white/5 p-8 text-center text-white/60">
        <p class="text-sm">No songs in this playlist yet.</p>
      </div>
    `;
    return;
  }

  const playlistSongs = playlist.songIds.map((songId) => songs.find((song) => song.id === songId)).filter(Boolean);
  elements.playlistSongsList.innerHTML = playlistSongs.map((song) => {
    return `
      <div class="group flex items-center justify-between gap-4 rounded-3xl bg-white/5 p-4 transition hover:bg-white/10">
        <div class="flex items-center gap-4">
          <img src="${song.image}" alt="${song.title}" class="h-16 w-16 rounded-2xl object-cover" />
          <div>
            <h4 class="font-semibold">${song.title}</h4>
            <p class="mt-1 text-sm text-white/60">${song.artist}</p>
          </div>
        </div>
        <button data-playlist-song-id="${song.id}" class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-green-500 text-black transition hover:scale-105">▶</button>
      </div>
    `;
  }).join('');
}

function selectSongInEditor(songId, checked) {
  if (checked) selectedSongIds.add(songId);
  else selectedSongIds.delete(songId);
}

function showView(view) {
  currentView = view;
  elements.homeView.classList.toggle('hidden', view !== 'home');
  elements.libraryView.classList.toggle('hidden', view !== 'library');
  elements.playlistEditor.classList.toggle('hidden', view !== 'playlistEditor');
  elements.playlistDetailView.classList.toggle('hidden', view !== 'playlistDetail');

  if (view === 'home') {
    elements.searchInput.value = '';
    updateSearchDisplay(false);
    elements.songSectionSubtitle.textContent = 'Recently added';
    elements.songSectionTitle.textContent = 'Jump back';
    currentSongList = [...songs];
    currentIndex = 0;
    renderSongList(currentSongList);
  }

  if (view === 'library') {
    renderLibraryPlaylists();
  }

  if (view === 'playlistEditor') {
    elements.playlistNameInput.value = '';
    selectedSongIds.clear();
    elements.playlistSearchInput.value = '';
    renderPlaylistEditorSongs();
  }
}

function updateSearchDisplay(active) {
  elements.recentSection.classList.toggle('hidden', active);
  elements.trendingSection.classList.toggle('hidden', active);
  elements.artistSection.classList.toggle('hidden', active);
}

function loadSong(index) {
  const song = currentSongList[index];
  if (!song) {
    elements.audioPlayer.removeAttribute('src');
    elements.playerImage.src = 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80';
    elements.playerTitle.textContent = 'Select a song';
    elements.playerArtist.textContent = 'Waiting to play';
    return;
  }

  currentIndex = index;
  elements.audioPlayer.src = song.audio;
  elements.playerImage.src = song.image;
  elements.playerTitle.textContent = song.title;
  elements.playerArtist.textContent = song.artist;
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
  if (isPlaying) pauseSong();
  else playSong();
}

function nextSong() {
  if (!currentSongList.length) return;
  if (isShuffle) {
    currentIndex = Math.floor(Math.random() * currentSongList.length);
  } else {
    currentIndex = (currentIndex + 1) % currentSongList.length;
  }
  loadSong(currentIndex);
  playSong();
}

function prevSong() {
  if (!currentSongList.length) return;
  currentIndex = (currentIndex - 1 + currentSongList.length) % currentSongList.length;
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
  nextSong();
}

function filterData(query) {
  const normalizedQuery = query.trim().toLowerCase();
  const isSearch = normalizedQuery.length > 0;
  updateSearchDisplay(isSearch);

  if (!isSearch) {
    currentSongList = [...songs];
    elements.songSectionSubtitle.textContent = 'Recently added';
    elements.songSectionTitle.textContent = 'Jump back';
  } else {
    currentSongList = songs.filter((song) => {
      return [song.title, song.artist, song.playlist].some((value) => value.toLowerCase().includes(normalizedQuery));
    });
    elements.songSectionSubtitle.textContent = 'Search results';
    elements.songSectionTitle.textContent = `${currentSongList.length} match${currentSongList.length === 1 ? '' : 'es'}`;
  }

  currentIndex = 0;
  renderSongList(currentSongList);
}

function saveNewPlaylist() {
  const name = elements.playlistNameInput.value.trim();
  if (!name) {
    alert('Please enter a playlist name.');
    return;
  }
  if (selectedSongIds.size === 0) {
    alert('Select at least one song for your playlist.');
    return;
  }

  userPlaylists.unshift({
    id: Date.now(),
    name,
    songIds: Array.from(selectedSongIds)
  });
  savePlaylists();
  renderSidebarPlaylists();
  showView('library');
}

function openPlaylistDetail(playlistId) {
  showView('playlistDetail');
  renderPlaylistDetail(playlistId);
}

function renamePlaylist() {
  const playlist = userPlaylists.find((item) => item.id === currentPlaylistDetailId);
  if (!playlist) return;
  const newName = prompt('Edit playlist name', playlist.name);
  if (!newName || !newName.trim()) return;
  playlist.name = newName.trim();
  savePlaylists();
  renderSidebarPlaylists();
  renderLibraryPlaylists();
  renderPlaylistDetail(currentPlaylistDetailId);
}

function playPlaylist() {
  const playlist = userPlaylists.find((item) => item.id === currentPlaylistDetailId);
  if (!playlist || playlist.songIds.length === 0) return;
  const firstSongId = playlist.songIds[0];
  const index = songs.findIndex((song) => song.id === firstSongId);
  if (index === -1) return;
  currentSongList = playlist.songIds.map((songId) => songs.find((song) => song.id === songId)).filter(Boolean);
  loadSong(0);
  playSong();
}

function playSongById(songId) {
  const song = songs.find((item) => item.id === songId);
  if (!song) return;
  elements.audioPlayer.src = song.audio;
  elements.playerImage.src = song.image;
  elements.playerTitle.textContent = song.title;
  elements.playerArtist.textContent = song.artist;
  elements.audioPlayer.load();
  playSong();
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

  elements.createPlaylistBtn.addEventListener('click', () => showView('playlistEditor'));
  elements.libraryCreateBtn.addEventListener('click', () => showView('playlistEditor'));
  elements.savePlaylistBtn.addEventListener('click', saveNewPlaylist);
  elements.cancelPlaylistBtn.addEventListener('click', () => showView('library'));
  elements.navHome.addEventListener('click', (event) => {
    event.preventDefault();
    showView('home');
  });
  elements.navLibrary.addEventListener('click', (event) => {
    event.preventDefault();
    showView('library');
  });
  elements.playlistSearchInput.addEventListener('input', (event) => {
    renderPlaylistEditorSongs(event.target.value);
  });
  elements.playPlaylistBtn.addEventListener('click', playPlaylist);
  elements.renamePlaylistBtn.addEventListener('click', renamePlaylist);
  elements.backToLibraryBtn.addEventListener('click', () => showView('library'));

  elements.playlistSongSelection.addEventListener('change', (event) => {
    const checkbox = event.target.closest('input[data-song-id]');
    if (!checkbox) return;
    selectSongInEditor(Number(checkbox.dataset.songId), checkbox.checked);
  });

  elements.libraryPlaylists.addEventListener('click', (event) => {
    const playlistAction = event.target.closest('[data-playlist-action]');
    if (!playlistAction) return;
    const playlistId = Number(playlistAction.dataset.playlistId);
    if (playlistAction.dataset.playlistAction === 'view') {
      openPlaylistDetail(playlistId);
    } else if (playlistAction.dataset.playlistAction === 'play') {
      currentPlaylistDetailId = playlistId;
      playPlaylist();
    }
  });

  elements.sidebarPlaylists.addEventListener('click', (event) => {
    const playlistButton = event.target.closest('[data-playlist-id]');
    if (!playlistButton) return;
    const playlistId = Number(playlistButton.dataset.playlistId);
    openPlaylistDetail(playlistId);
  });

  elements.songList.addEventListener('click', (event) => {
    const likeButton = event.target.closest('[data-like]');
    if (likeButton) {
      const id = Number(likeButton.dataset.like);
      const song = songs.find((item) => item.id === id);
      if (song) {
        song.liked = !song.liked;
        renderSongList(currentSongList);
      }
      return;
    }

    const songButton = event.target.closest('[data-song-id]');
    if (songButton && currentView === 'home') {
      const id = Number(songButton.dataset.songId);
      const index = currentSongList.findIndex((item) => item.id === id);
      if (index >= 0) {
        loadSong(index);
        playSong();
      }
    }
  });

  elements.playlistSongsList.addEventListener('click', (event) => {
    const songButton = event.target.closest('[data-playlist-song-id]');
    if (!songButton) return;
    const songId = Number(songButton.dataset.playlistSongId);
    playSongById(songId);
  });

  elements.searchInput.addEventListener('input', (event) => {
    if (currentView === 'home') filterData(event.target.value);
  });

  elements.searchInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && currentView === 'home') {
      event.preventDefault();
      filterData(event.target.value);
    }
  });

  const progressContainer = elements.progressBar.parentElement;
  progressContainer.addEventListener('click', setProgress);
}

function initializeApp() {
  renderSidebarPlaylists();
  renderRecentCards(songs);
  renderTrendingPlaylists([
    { name: 'Today’s Top Hits', description: 'Hit singles you can’t miss', image: 'https://images.unsplash.com/photo-1511376777868-611b54f68947?auto=format&fit=crop&w=400&q=80' },
    { name: 'Rap Caviar', description: 'Hard-hitting rap tracks', image: 'https://images.unsplash.com/photo-1531251445707-1f000e1e87d0?auto=format&fit=crop&w=400&q=80' },
    { name: 'Chill Vibes', description: 'Relaxed modern grooves', image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80' },
    { name: 'Mood Booster', description: 'Feel-good pop anthems', image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=400&q=80' }
  ]);
  renderArtistCards([
    { name: 'Luna Echo', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80' },
    { name: 'Aurora Minority', image: 'https://images.unsplash.com/photo-1531251445707-1f000e1e87d0?auto=format&fit=crop&w=400&q=80' },
    { name: 'The Metro', image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80' },
    { name: 'Nova Dream', image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80' }
  ]);
  renderSongList(currentSongList);
  elements.audioPlayer.volume = 0.7;
  loadSong(0);
  assignEvents();
}

window.addEventListener('DOMContentLoaded', initializeApp);

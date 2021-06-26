import Head from "next/head"


export default function Navbar() {
  return (
    <nav>
      <Head>
        <script async defer data-website-id="6d5d7373-bb7d-4505-83af-46d78cdfa1a6" src="https://umami-zblog.herokuapp.com/umami.js"></script>
      </Head>
      <div className="navbar">
        <ul>
          <div className="nav-items">
            <a href="/" className="nav-link">
              <li>
                <div className="nav-link">
                  <svg className="nav-item-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px" height="50px"><path d="M 24.962891 1.0546875 A 1.0001 1.0001 0 0 0 24.384766 1.2636719 L 1.3847656 19.210938 A 1.0005659 1.0005659 0 0 0 2.6152344 20.789062 L 4 19.708984 L 4 46 A 1.0001 1.0001 0 0 0 5 47 L 18.832031 47 A 1.0001 1.0001 0 0 0 19.158203 47 L 30.832031 47 A 1.0001 1.0001 0 0 0 31.158203 47 L 45 47 A 1.0001 1.0001 0 0 0 46 46 L 46 19.708984 L 47.384766 20.789062 A 1.0005657 1.0005657 0 1 0 48.615234 19.210938 L 41 13.269531 L 41 6 L 35 6 L 35 8.5859375 L 25.615234 1.2636719 A 1.0001 1.0001 0 0 0 24.962891 1.0546875 z M 25 3.3222656 L 44 18.148438 L 44 45 L 32 45 L 32 26 L 18 26 L 18 45 L 6 45 L 6 18.148438 L 25 3.3222656 z M 37 8 L 39 8 L 39 11.708984 L 37 10.146484 L 37 8 z M 20 28 L 30 28 L 30 45 L 20 45 L 20 28 z" /></svg>
                  <span className="nav-link-text">&nbsp;&nbsp;  Home</span>
                </div>
              </li>
            </a>
          </div>
          <div className="nav-items">
            <a href="/blog" className="nav-link">
              <li>
                <div className="nav-link">
                  <svg className="nav-item-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px" height="50px"><path d="M 17 2 C 15.351563 2 14 3.351563 14 5 L 14 10 L 10 10 C 6.691406 10 4 12.691406 4 16 L 4 48 C 4 51.308594 6.691406 54 10 54 L 14 54 L 14 60.871094 C 14 61.648438 14.441406 62.339844 15.152344 62.679688 C 15.429688 62.800781 15.71875 62.871094 16 62.871094 C 16.460938 62.871094 16.910156 62.710938 17.28125 62.402344 L 26.53125 54.699219 C 27.070313 54.25 27.75 54 28.449219 54 L 54 54 C 57.308594 54 60 51.308594 60 48 L 60 16 C 60 12.691406 57.308594 10 54 10 L 32 10 L 32 5 C 32 3.351563 30.648438 2 29 2 Z M 17 4 L 29 4 C 29.550781 4 30 4.449219 30 5 L 30 28.71875 L 24 27.21875 L 24 15 C 24 14.445313 23.550781 14 23 14 C 22.449219 14 22 14.445313 22 15 L 22 27.21875 L 16 28.71875 L 16 5 C 16 4.449219 16.449219 4 17 4 Z M 23 6 C 22.449219 6 22 6.445313 22 7 L 22 11 C 22 11.554688 22.449219 12 23 12 C 23.550781 12 24 11.554688 24 11 L 24 7 C 24 6.445313 23.550781 6 23 6 Z M 10 12 L 14 12 L 14 30.800781 C 14 31.039063 14.089844 31.28125 14.25 31.460938 L 18.871094 36.65625 C 18.875 36.660156 18.871094 36.660156 18.875 36.664063 L 22.253906 40.464844 C 22.296875 40.511719 22.355469 40.539063 22.40625 40.578125 C 22.578125 40.710938 22.777344 40.800781 23 40.800781 C 23.222656 40.800781 23.421875 40.710938 23.59375 40.578125 C 23.644531 40.539063 23.703125 40.511719 23.75 40.464844 L 27.125 36.664063 C 27.128906 36.660156 27.128906 36.660156 27.128906 36.65625 L 31.75 31.460938 C 31.910156 31.28125 32 31.039063 32 30.800781 L 32 12 L 54 12 C 56.210938 12 58 13.789063 58 16 L 58 42 L 25 42 C 24.628906 42 24.285156 42.207031 24.113281 42.535156 C 23.941406 42.867188 23.96875 43.265625 24.183594 43.574219 L 30.078125 52 L 28.449219 52 C 27.277344 52 26.140625 52.410156 25.25 53.160156 L 16 60.871094 L 16 54 C 16 52.898438 15.101563 52 14 52 L 10 52 C 7.789063 52 6 50.210938 6 48 L 6 16 C 6 13.789063 7.789063 12 10 12 Z M 23 29.03125 L 29.738281 30.714844 L 25.925781 35 L 20.074219 35 L 16.261719 30.714844 Z M 26.921875 44 L 58 44 L 58 48 C 58 50.207031 56.207031 52 54 52 L 32.519531 52 L 29.9375 48.3125 C 29.96875 48.210938 30 48.109375 30 48 L 30 47 C 30 46.445313 29.550781 46 29 46 C 28.792969 46 28.609375 46.078125 28.453125 46.1875 Z M 34 46 C 33.449219 46 33 46.445313 33 47 L 33 49 C 33 49.554688 33.449219 50 34 50 C 34.550781 50 35 49.554688 35 49 L 35 47 C 35 46.445313 34.550781 46 34 46 Z M 39 46 C 38.449219 46 38 46.445313 38 47 L 38 49 C 38 49.554688 38.449219 50 39 50 C 39.550781 50 40 49.554688 40 49 L 40 47 C 40 46.445313 39.550781 46 39 46 Z M 44 46 C 43.449219 46 43 46.445313 43 47 L 43 49 C 43 49.554688 43.449219 50 44 50 C 44.550781 50 45 49.554688 45 49 L 45 47 C 45 46.445313 44.550781 46 44 46 Z M 49 46 C 48.449219 46 48 46.445313 48 47 L 48 49 C 48 49.554688 48.449219 50 49 50 C 49.550781 50 50 49.554688 50 49 L 50 47 C 50 46.445313 49.550781 46 49 46 Z M 54 46 C 53.449219 46 53 46.445313 53 47 L 53 49 C 53 49.554688 53.449219 50 54 50 C 54.550781 50 55 49.554688 55 49 L 55 47 C 55 46.445313 54.550781 46 54 46 Z" /></svg>
                  <span className="nav-link-text">&nbsp;&nbsp;  Blog</span>
                </div>
              </li>
            </a>
          </div>
          <div className="nav-items">
            <a href="/project" className="nav-link">
              <li>
                <div className="nav-link">
                  <svg className="nav-item-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" width="50px" height="50px"><path d="M 40 7 C 21.835938 7 7 20.386719 7 37 C 7 46.371094 11.796875 54.671875 19.167969 60.160156 C 18.230469 63.519531 16.679688 65.691406 15.21875 67.277344 C 14.449219 68.117188 13.710938 68.8125 13.113281 69.519531 C 12.519531 70.226563 12 71.015625 12 72 L 12 73 L 13 73 C 19.820313 73 26.667969 68.792969 30.8125 65.785156 C 33.734375 66.558594 36.808594 67 40 67 C 58.164063 67 73 53.613281 73 37 C 73 20.386719 58.164063 7 40 7 Z M 40 9 C 57.183594 9 71 21.582031 71 37 C 71 52.417969 57.183594 65 40 65 C 36.820313 65 33.753906 64.566406 30.867188 63.761719 L 30.398438 63.628906 L 30.003906 63.921875 C 26.40625 66.5625 20.378906 70.097656 14.703125 70.746094 C 15.1875 70.183594 15.894531 69.5 16.695313 68.628906 C 18.347656 66.832031 20.316406 64.230469 21.316406 60.113281 L 21.480469 59.453125 L 20.921875 59.0625 C 13.648438 53.917969 9 45.953125 9 37 C 9 21.582031 22.816406 9 40 9 Z M 40.058594 12 C 39.503906 12 39.054688 12.445313 39.054688 13 C 39.054688 13.550781 39.5 14 40.050781 14 C 40.605469 14 41.054688 13.554688 41.054688 13 C 41.054688 12.449219 40.609375 12 40.058594 12 Z M 34.792969 12.511719 C 34.722656 12.507813 34.65625 12.515625 34.59375 12.53125 C 34.050781 12.636719 33.699219 13.160156 33.804688 13.703125 C 33.910156 14.246094 34.4375 14.597656 34.980469 14.488281 C 35.519531 14.382813 35.871094 13.859375 35.765625 13.316406 C 35.671875 12.851563 35.265625 12.511719 34.792969 12.511719 Z M 45.34375 12.53125 C 44.859375 12.515625 44.433594 12.855469 44.339844 13.332031 C 44.230469 13.875 44.578125 14.402344 45.121094 14.511719 C 45.664063 14.617188 46.191406 14.269531 46.296875 13.726563 C 46.40625 13.183594 46.058594 12.65625 45.515625 12.546875 C 45.460938 12.539063 45.402344 12.53125 45.34375 12.53125 Z M 29.726563 14.035156 C 29.59375 14.035156 29.460938 14.0625 29.335938 14.109375 C 29.089844 14.210938 28.894531 14.40625 28.792969 14.652344 C 28.691406 14.898438 28.691406 15.171875 28.792969 15.417969 C 29.003906 15.929688 29.585938 16.171875 30.097656 15.960938 C 30.609375 15.75 30.851563 15.167969 30.640625 14.65625 C 30.488281 14.285156 30.128906 14.042969 29.726563 14.035156 Z M 50.40625 14.078125 C 49.992188 14.066406 49.617188 14.3125 49.457031 14.691406 C 49.355469 14.9375 49.355469 15.210938 49.457031 15.457031 C 49.554688 15.703125 49.75 15.898438 49.996094 16 C 50.242188 16.101563 50.515625 16.101563 50.761719 16 C 51.007813 15.902344 51.203125 15.707031 51.304688 15.460938 C 51.515625 14.953125 51.273438 14.367188 50.765625 14.15625 C 50.652344 14.105469 50.527344 14.078125 50.40625 14.078125 Z M 25.058594 16.519531 C 24.855469 16.519531 24.660156 16.578125 24.488281 16.6875 C 24.03125 16.996094 23.90625 17.617188 24.214844 18.078125 C 24.519531 18.535156 25.140625 18.660156 25.597656 18.355469 C 26.058594 18.050781 26.183594 17.429688 25.875 16.96875 C 25.695313 16.695313 25.386719 16.527344 25.058594 16.519531 Z M 55.0625 16.578125 C 54.722656 16.570313 54.402344 16.738281 54.214844 17.019531 C 53.90625 17.480469 54.027344 18.101563 54.484375 18.40625 C 54.707031 18.554688 54.976563 18.609375 55.238281 18.558594 C 55.496094 18.507813 55.726563 18.355469 55.875 18.136719 C 56.183594 17.675781 56.058594 17.054688 55.601563 16.75 C 55.441406 16.640625 55.257813 16.582031 55.0625 16.578125 Z M 20.964844 19.871094 C 20.691406 19.867188 20.433594 19.972656 20.238281 20.160156 C 19.847656 20.550781 19.847656 21.183594 20.238281 21.578125 C 20.628906 21.96875 21.261719 21.96875 21.652344 21.578125 C 22.042969 21.1875 22.042969 20.554688 21.65625 20.164063 C 21.46875 19.980469 21.222656 19.875 20.964844 19.871094 Z M 59.144531 19.949219 C 58.875 19.941406 58.617188 20.046875 58.421875 20.238281 C 58.03125 20.628906 58.03125 21.261719 58.421875 21.652344 C 58.605469 21.839844 58.863281 21.945313 59.128906 21.945313 C 59.394531 21.949219 59.648438 21.84375 59.835938 21.65625 C 60.226563 21.265625 60.226563 20.632813 59.839844 20.238281 C 59.652344 20.054688 59.40625 19.953125 59.144531 19.949219 Z M 40 22 C 37.800781 22 36 23.800781 36 26 C 36 28.199219 37.800781 30 40 30 C 42.199219 30 44 28.199219 44 26 C 44 23.800781 42.199219 22 40 22 Z M 17.601563 23.953125 C 17.261719 23.949219 16.941406 24.113281 16.75 24.394531 C 16.601563 24.617188 16.546875 24.886719 16.597656 25.148438 C 16.648438 25.40625 16.804688 25.636719 17.023438 25.785156 C 17.242188 25.933594 17.515625 25.988281 17.773438 25.9375 C 18.035156 25.886719 18.265625 25.730469 18.410156 25.511719 C 18.71875 25.054688 18.597656 24.433594 18.140625 24.125 C 17.980469 24.019531 17.792969 23.960938 17.601563 23.953125 Z M 40 24 C 41.117188 24 42 24.882813 42 26 C 42 27.117188 41.117188 28 40 28 C 38.882813 28 38 27.117188 38 26 C 38 24.882813 38.882813 24 40 24 Z M 62.496094 24.046875 C 62.292969 24.042969 62.09375 24.101563 61.925781 24.214844 C 61.464844 24.519531 61.34375 25.140625 61.648438 25.597656 C 61.953125 26.058594 62.574219 26.183594 63.03125 25.878906 C 63.492188 25.574219 63.617188 24.953125 63.3125 24.492188 C 63.128906 24.21875 62.824219 24.050781 62.496094 24.046875 Z M 15.097656 28.617188 C 14.6875 28.605469 14.3125 28.851563 14.152344 29.234375 C 14.050781 29.476563 14.050781 29.753906 14.152344 30 C 14.25 30.242188 14.445313 30.4375 14.691406 30.542969 C 15.199219 30.753906 15.785156 30.511719 16 30 C 16.101563 29.757813 16.101563 29.480469 16 29.234375 C 15.898438 28.992188 15.703125 28.796875 15.457031 28.691406 C 15.34375 28.644531 15.222656 28.621094 15.097656 28.617188 Z M 64.972656 28.71875 C 64.839844 28.71875 64.707031 28.746094 64.582031 28.796875 C 64.074219 29.007813 63.828125 29.589844 64.039063 30.101563 C 64.140625 30.347656 64.335938 30.542969 64.578125 30.644531 C 64.824219 30.746094 65.101563 30.746094 65.34375 30.644531 C 65.855469 30.433594 66.097656 29.851563 65.890625 29.339844 C 65.734375 28.96875 65.375 28.726563 64.972656 28.71875 Z M 37 33 L 37 51 L 43 51 L 43 33 Z M 13.558594 33.679688 C 13.070313 33.664063 12.644531 34.003906 12.546875 34.484375 C 12.496094 34.742188 12.546875 35.011719 12.695313 35.234375 C 12.84375 35.453125 13.070313 35.609375 13.332031 35.660156 C 13.871094 35.769531 14.398438 35.417969 14.507813 34.875 C 14.617188 34.335938 14.265625 33.808594 13.722656 33.699219 C 13.667969 33.6875 13.613281 33.679688 13.558594 33.679688 Z M 66.5 33.789063 C 66.429688 33.789063 66.363281 33.792969 66.296875 33.808594 C 66.039063 33.859375 65.808594 34.011719 65.660156 34.230469 C 65.515625 34.453125 65.460938 34.722656 65.511719 34.984375 C 65.617188 35.523438 66.144531 35.875 66.6875 35.769531 C 67.226563 35.664063 67.578125 35.136719 67.472656 34.59375 C 67.378906 34.128906 66.972656 33.792969 66.5 33.789063 Z M 39 35 L 41 35 L 41 49 L 39 49 Z M 13 38.945313 C 12.449219 38.945313 12 39.390625 12 39.941406 C 12 40.496094 12.445313 40.945313 13 40.945313 C 13.550781 40.945313 14 40.5 14 39.949219 C 14 39.394531 13.554688 38.945313 13 38.945313 Z M 67 39.050781 C 66.449219 39.050781 66.003906 39.5 66 40.050781 C 66 40.601563 66.449219 41.050781 67 41.050781 C 67.550781 41.054688 68 40.605469 68 40.054688 C 68.003906 39.789063 67.898438 39.535156 67.710938 39.347656 C 67.523438 39.160156 67.265625 39.050781 67 39.050781 Z M 14.265625 43.78125 C 14.128906 43.777344 14 43.804688 13.875 43.855469 C 13.628906 43.957031 13.433594 44.152344 13.335938 44.398438 C 13.234375 44.644531 13.234375 44.917969 13.335938 45.164063 C 13.4375 45.410156 13.632813 45.605469 13.878906 45.703125 C 14.125 45.804688 14.398438 45.804688 14.644531 45.703125 C 15.15625 45.488281 15.394531 44.902344 15.183594 44.394531 C 15.027344 44.023438 14.664063 43.78125 14.265625 43.78125 Z M 65.765625 43.78125 C 65.351563 43.769531 64.976563 44.015625 64.816406 44.394531 C 64.605469 44.90625 64.847656 45.492188 65.355469 45.703125 C 65.863281 45.914063 66.449219 45.675781 66.660156 45.167969 C 66.765625 44.921875 66.765625 44.644531 66.664063 44.398438 C 66.5625 44.15625 66.367188 43.960938 66.125 43.859375 C 66.007813 43.808594 65.886719 43.785156 65.765625 43.78125 Z M 62.800781 48.3125 C 62.460938 48.304688 62.140625 48.472656 61.953125 48.753906 C 61.644531 49.214844 61.765625 49.835938 62.222656 50.140625 C 62.441406 50.289063 62.714844 50.34375 62.972656 50.292969 C 63.234375 50.242188 63.464844 50.089844 63.609375 49.871094 C 63.917969 49.410156 63.796875 48.789063 63.339844 48.484375 C 63.179688 48.375 62.992188 48.316406 62.800781 48.3125 Z M 17.230469 48.316406 C 17.027344 48.316406 16.828125 48.375 16.660156 48.484375 C 16.441406 48.632813 16.289063 48.863281 16.238281 49.125 C 16.1875 49.382813 16.242188 49.65625 16.390625 49.875 C 16.535156 50.09375 16.765625 50.246094 17.027344 50.296875 C 17.289063 50.347656 17.558594 50.292969 17.777344 50.144531 C 18.234375 49.839844 18.355469 49.21875 18.046875 48.761719 C 17.867188 48.484375 17.558594 48.320313 17.230469 48.316406 Z M 20.886719 52.054688 C 20.617188 52.050781 20.355469 52.15625 20.164063 52.34375 C 19.773438 52.734375 19.773438 53.367188 20.160156 53.761719 C 20.550781 54.152344 21.183594 54.152344 21.578125 53.761719 C 21.96875 53.371094 21.96875 52.738281 21.578125 52.347656 C 21.394531 52.164063 21.148438 52.058594 20.886719 52.054688 Z M 59.070313 52.128906 C 58.800781 52.125 58.539063 52.230469 58.347656 52.421875 C 58.160156 52.605469 58.054688 52.863281 58.054688 53.128906 C 58.050781 53.394531 58.15625 53.648438 58.34375 53.835938 C 58.734375 54.226563 59.367188 54.226563 59.761719 53.839844 C 60.152344 53.449219 60.152344 52.816406 59.761719 52.421875 C 59.578125 52.238281 59.332031 52.132813 59.070313 52.128906 Z M 54.96875 55.484375 C 54.765625 55.480469 54.570313 55.539063 54.402344 55.648438 C 53.941406 55.953125 53.816406 56.574219 54.125 57.035156 C 54.429688 57.496094 55.050781 57.621094 55.511719 57.3125 C 55.96875 57.007813 56.09375 56.386719 55.789063 55.925781 C 55.605469 55.652344 55.300781 55.484375 54.96875 55.484375 Z M 50.292969 57.96875 C 50.15625 57.96875 50.023438 57.992188 49.902344 58.042969 C 49.65625 58.144531 49.460938 58.339844 49.355469 58.582031 C 49.253906 58.828125 49.253906 59.105469 49.355469 59.347656 C 49.457031 59.59375 49.652344 59.789063 49.894531 59.890625 C 50.140625 59.992188 50.417969 59.992188 50.660156 59.890625 C 51.171875 59.683594 51.414063 59.097656 51.203125 58.589844 C 51.050781 58.214844 50.691406 57.972656 50.292969 57.96875 Z M 34.707031 59.46875 C 34.21875 59.457031 33.796875 59.792969 33.699219 60.269531 C 33.589844 60.8125 33.941406 61.339844 34.484375 61.449219 C 35.023438 61.558594 35.550781 61.207031 35.660156 60.667969 C 35.769531 60.125 35.417969 59.597656 34.875 59.488281 C 34.820313 59.476563 34.765625 59.46875 34.707031 59.46875 Z M 45.21875 59.496094 C 45.152344 59.496094 45.085938 59.5 45.019531 59.515625 C 44.761719 59.566406 44.53125 59.71875 44.382813 59.9375 C 44.234375 60.160156 44.179688 60.429688 44.234375 60.6875 C 44.339844 61.230469 44.863281 61.582031 45.40625 61.476563 C 45.949219 61.371094 46.300781 60.84375 46.195313 60.300781 C 46.101563 59.835938 45.695313 59.5 45.21875 59.496094 Z M 39.949219 60 C 39.398438 60 38.949219 60.449219 38.949219 61 C 38.945313 61.550781 39.394531 62 39.945313 62 C 40.210938 62.003906 40.464844 61.898438 40.652344 61.710938 C 40.839844 61.523438 40.949219 61.265625 40.949219 61 C 40.949219 60.449219 40.5 60.003906 39.949219 60 Z" /></svg>
                  <span className="nav-link-text">&nbsp;&nbsp;  Projects</span>
                </div>
              </li>
            </a>
          </div>
        </ul>
      </div>
      <style>
        {`
          nav {
            position: fixed;
            background-color:var(--bg-primary);
            transition: var(--transition-speed);
            z-index:1;
          }
          ul, li{
            margin:0;
            padding: 0;
            list-style:none;
          }
          .nav-item-logo {
            fill:white;
          }
          .nav-link-text{
            display:none;
            text-decoration:none;
          }
          @media only screen and (min-width: 600px) {
            nav{
              height:100vh;
              width : 5rem;
            }
            nav:hover {
              width: 16rem;
            }
            nav:hover span{
              display : block;
            }
            .navbar{
              display:flex;
              flex-direction:column;
              align-items:center;
              justify-content:center;
            }
            .nav-items{
              margin-top:3rem;
              padding:1rem;
              
            }
            .nav-items:hover{
              background-color:var(--bg-secondary);
              width:16rem;
            }
            .nav-link{
              display:flex;
              width:100%;
              justify-content:center;
              align-items:center;
              text-decoration:none !important;
              color:var(--text-primary);
            }
            .nav-link:hover{
              color:#ff7eee;
            }
            .nav-link:hover .nav-item-logo{
              fill:#ff7eee;
            }
            }
            @media only screen and (max-width: 600px) {
              nav {
                bottom: 0;
                width: 100vw;
                height: 5rem;
              }
              .navbar{
                display:flex;
                flex-direction:row;
                align-items:center;
                justify-content:center;
                width:100%;
              }
              .nav-items{
                padding:1rem;
                display:inline-block;
              }
              .nav-items:hover{
                background-color:var(--bg-secondary);
                height:5rem;
              }
            }
          }
        `}
      </style>
    </nav>
  )
}
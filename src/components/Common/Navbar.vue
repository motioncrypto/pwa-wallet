<template>
  <div id="navbar">
    <nav>
      <ul id="sections">
        <router-link to="/" tag="li" class="section" exact>
          <div class="menu-section">
            <div class="icon-container">
              <img src="./assets/icon-home.png" class="icon" />
            </div>
            <div class="section-name">
              Home
            </div>
          </div>
        </router-link>
        <router-link to="/receive" tag="li" class="section">
          <div class="menu-section">
            <div class="icon-container">
              <img src="./assets/icon-receive.png" class="icon" />
            </div>
            <div class="section-name">
              Receive
            </div>
          </div>
        </router-link>
        <router-link to="/scan" tag="li" class="section">
          <div class="menu-section">
            <div class="icon-container">
              <img src="./assets/icon-scan.png" class="icon" />
            </div>
            <div class="section-name">
              Scan
            </div>
          </div>
        </router-link>
        <router-link to="/send" tag="li" class="section">
          <div class="menu-section">
            <div class="icon-container">
              <img src="./assets/icon-send.png" class="icon" />
            </div>
            <div class="section-name">
              Send
            </div>
          </div>
        </router-link>
        <router-link to="/settings" tag="li" class="section">
          <div class="menu-section">
            <div class="icon-container">
              <img src="./assets/icon-settings.png" class="icon" />
            </div>
            <div class="section-name">
              Settings
            </div>
          </div>
        </router-link>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
#navbar {
  background-color: #EFEFEF;
  position: fixed;
  bottom: 0;
  height: 70px;
  width: 100%;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;

  &:before {
    background-image: linear-gradient(-180deg, rgba(0,0,0,0.00) 0%, #2B2B2B 100%);
    height: 50px;
    width: 100%;
    position: absolute;
    top: -50px;
    left: 0;
    right: 0;
    content: '';
    z-index: 2;
  }
}

#sections {
  list-style: none;

  li {
    display: inline-block;
    padding: 0;
    color: #000;
    margin-left: 15px;
    margin-right: 15px;
    font-size: 0.8em;

    &:first-child {
      margin-left: 10px;
    }

    &:last-child {
      margin-right: 10px;
    }

    .icon {
      height: 25px;
      width: auto;
    }

    &.router-link-active {
      color: #1E8DE0;
      font-weight: bolder;
    }
  }
}
</style>

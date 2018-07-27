<template>
  <div class="move">
    <div class="left-side">
      <img src="./assets/icon-copy.png" class="icon" />
    </div>
    <div class="right-side">
      <div class="top">
        <div class="date">
          <p>{{title}}</p>
        </div>
        <div class="amount">
          <p>{{amount}} <span class="bolder">XMN</span></p>
        </div>
      </div>
      <div class="bottom">
        <p>{{wallet}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'amount', 'wallet'],
};
</script>


<style lang="scss" scoped>
.move {
  width: 50%;
  background: rgba(255,255,255,0.70);
  box-shadow: 0 2px 8px 0 #5C5C5C;
  border-radius: 10px;
  padding: 16px 14px;
  max-width: 90%;
  margin: 20px auto;
  font-size: 0.9em;

  .icon {
    height: 35px;
    width: auto;
  }

  display: grid;
  grid-template-columns: 50px auto;
  justify-items: center;
  align-content: center;

  @media screen and (max-width: $break-mobile) {
    width: 90%;
  }

  .right-side {
    padding-left: 20px;
    padding-right: 20px;
    color: #001B38;

    .top {
      width: 100%;
    }

    .top .date {
      float: left;
      color: #4D4D4D;
    }

    .top .amount {
      float: right;
    }

    .bolder {
      font-weight: bolder;
    }

    .bottom {
      width: 100%;

      p {
        font-size: 0.8em;
      }
    }
  }
}
</style>

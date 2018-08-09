<template>
  <div class="move">
    <div class="left-side">
      <i class="far fa-arrow-alt-circle-down" v-if="type === 'receive'"></i>
      <i class="far fa-arrow-alt-circle-up red" v-if="type === 'send'"></i>
    </div>
    <div class="right-side">
      <div class="top">
        <div class="date">
          <p>{{date | formatDate}}</p>
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
  props: ['date', 'amount', 'wallet', 'type'],
};
</script>


<style lang="scss" scoped>
.move {
  display: block;
  clear: both;
  width: 100%;
  background: rgba(255,255,255,0.70);
  box-shadow: 0 2px 8px 0 #5C5C5C;
  border-radius: 10px;
  padding: 16px 14px;
  max-width: 90%;
  margin: 20px auto;
  font-size: 0.9em;

  i {
    color: #1E8DE0;
    font-size: 3em;

    &.red {
      color: red;
    }
  }

  display: grid;
  grid-template-columns: 50px auto;
  justify-items: center;
  align-content: center;

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
      margin-left: 20px;
    }

    .bolder {
      font-weight: bolder;
    }

    .bottom {
      width: 100%;

      p {
        font-size: 1em;

        @media screen and (max-width: $break-mobile) {
          font-size: 0.8em;
        }
      }
    }
  }
}
</style>

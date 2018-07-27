<template>
  <div id="scan-form">
    <div class="current-balance">
      <div class="left">
        <p>Current Balance</p>
      </div>
      <div class="right">
        <p>888 <span class="bolder">XMN</span></p>
      </div>
    </div>

    <form>
      <div class="field">
        <label class="label">Please enter the destination XMN Wallet Address</label>
        <div class="control">
          <input class="input" type="text" placeholder="Motion Wallet">
        </div>
      </div>

      <div class="field">
        <label class="label">Amount to send</label>
        <div class="control">
          <input class="input" type="number" placeholder="Motion Wallet">
        </div>
      </div>

      <button type="submit" class="button is-primary">Send</button>
    </form>
  </div>
</template>

<style lang="scss" scoped>
#scan-form {
  background: rgba(255,255,255,0.70);
  box-shadow: 0 2px 8px 0 #5C5C5C;
  border-radius: 10px;
  color: #000;
  min-height: 50px;
  padding: 20px 30px;
  margin: 30px auto;
  width: 50%;

  @media screen and (max-width: $break-mobile) {
    width: 90%;
  }
}

.current-balance {
  clear: both;

  .left {
    float: left;
  }

  .right {
    float: right;

    .bolder {
      font-weight: bolder;
    }
  }
}

form {
  clear: both;
  margin-top: 50px;

  label.label {
    text-align: left;
    font-weight: lighter;
  }

  button {
    width: 50%;
    margin-top: 15px;
  }
}
</style>

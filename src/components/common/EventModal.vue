<template>
     <transition name="modal-fade">
    <div class="modal-backdrop">
      <form class="modal">
        <header class="modal-header">
          <slot name="header">
            <h5>
              Create event
            </h5>

            <button type="button" class="btn-close btn-right" @click="$emit('closeModal')">
            </button>
          </slot>
        </header>

        <section class="modal-body">
          <div class='fields'>
            <div class='input'>
                <label for='input'>Date</label>
                <input placeholder='' for='date' type='date' required id='date'>
            </div>
            <div class=' input group'>
                <label>Times</label>
                <div class='input'>
                    <label for='startTime'>Start Time</label>
                    <input placeholder='Start time' v-model='start' type='time' required id='startTime'>
                </div>
                <div class='input'>
                    <label for='endTime'>End Time</label>
                    <input placeholder='End time' v-model='end' type='time' required id='endTime'>
                </div>

            </div> 
          </div>
        </section>

        <footer class="modal-footer">
          <slot name="footer">
            <button type="button" class="btn btn-green" @click="getEventTime">
              Create
            </button>
          </slot>
        </footer>
      </form>
    </div>
  </transition>
</template>

<script>
    export default {
        data() {
            return {
                start: null,
                end: null,
            }
        },
        methods: {
            getEventTime() {
                this.$emit('getEventTime', {
                    startTime: this.start,
                    startTimeAsNumber: Number(this.start.replace(':', '')),
                    timeAsNumber: (Number(this.end.replace(':', '')) - Number(this.start.replace(':', '')))/100,
                    endTime: this.end
                })
            }
        }
    }
</script>

<style lang="less" scoped>
    .btn {
  padding: 8px 16px;
  border-radius: 3px;
  font-size: 14px;
  cursor: pointer;
}

.modal-backdrop {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 999;
    box-sizing: border-box;
    background-color: rgba(0,0,0,.3);
    width: 100%;
    height: 100%;
}

.modal {
  position: absolute;
    background: #fff;
    width: 90%;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    max-width: 500px;
    box-shadow: 0 0 6px rgba(0,0,0,0.4);
}

.modal-header,
.modal-footer {
  padding: 20px;
  display: flex;
}

.modal-header {
  border-bottom: 1px solid #eaf0f4;
  justify-content: space-between;

  h5 {
      margin: 0;
      font-weight: 600;
  }
}

.modal-footer {
  border-bottom: 1px solid #eaf0f4;
  justify-content: flex-end;
}

.modal-body {
  max-height: 550px;
  padding: 20px;
  border-bottom: 1px solid #eaf0f4;

  .fields {
      display: flex;
      flex-wrap: wrap;
      text-align: left;

      label {
          display: inline-block;
          margin-bottom: 10px;
        
      }
      .input {
      padding: 10px;
      width: 100%;
    }
    input[type=date] {
    transition: all .3s ease-in-out;
    display: block;
    font-family: inherit;
    width: 94%;
    border: 1px solid #e8e9ec;
    border-radius: 4px;
    padding: 10px 12px;
    }
    .group {
        display: flex;
        flex-wrap: wrap;
        label {
            width: 100%;
            margin-bottom: 5px;
        }
        input {
            transition: all .3s ease-in-out;
            display: block;
            width: 86%;
            font-family: inherit;
            border: 1px solid #e8e9ec;
            border-radius: 4px;
            padding: 10px 12px;
        }
        .input {
            width: auto;
            flex: 1;

           &:nth-child(2) {
                padding-left: 0;
           }
             &:nth-child(3) {
                padding-right: 0;
           }
           label {
               margin-bottom: 10px;
           }
          
        }
    }
  }
  
}

.btn-close {
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: inline-block;
    flex-grow: 0;
    flex-shrink: 0;
    font-size: 0;
    height: 18px;
    max-height: 18px;
    max-width: 18px;
    min-height: 18px;
    min-width: 18px;
    outline: none;
    position: relative;
    vertical-align: top;
    width: 18px;
    padding: 0;
    margin-left: auto;

  &::before,
  &::after {
    background-color: #bcbccb;
    content: "";
    display: block;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translateX(-50%) translateY(-50%) rotate(45deg);
    transform-origin: center center;
  }
  &::before {
    height: 2px;
    width: 100%;
  }
  &::after {
    height: 100%;
    width: 2px;
  }
}

.btn {
     cursor: pointer;
     color: #ffffff;
    background: #3b86ff;
    padding: 8px 18px;
    border: 1px solid #3b86ff;
    box-shadow: 0 2px 3px rgb(0 0 0 / 5%);
    font-size: 13px;
    transition: all .3s ease-in-out;
}

.modal-fade-enter,
.modal-fade-leave-active {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}

</style>
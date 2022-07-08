<template>
  <div>
    <div class="weekdays-wrapper">
      <div class="padding-block">00:00</div>
      <WeekDays
        class="weekdays"
        :month="month"
        :weeks="weeks"
        :year="year"
        :weekIndex="weekIndex"
        :isWeekActive="isWeekActive"
      />
    </div>
    <div class="hours-wrapper">
      <div class="hours-item">
        <div
          class="hours padding-block"
          :class="{ now: hour === isNowHour }"
          v-for="hour in hours"
          :key="hour"
          v-html="hour"
        ></div>
      </div>
      <div class="days">
        <TimeLine
          :style="{
            top:
              60 +
              (this.hours < 1
                ? this.isNowMin
                : this.hour * 60 + this.isNowMin) +
              'px',
          }"
        />
        <div
          class="day-week"
          :eventsArr="eventsArr"
          :currentDay="currentDay"
          v-for="(day, i) in weeks[weekIndex]"
          :key="i"
          @click="$emit('showModal', day.numberDay, month, year)"
          :class="{
            current: currentDay === day.numberDay && month === currentMonth,
          }"
        >
          <div
            class="day-hours hours padding-block"
            :class="{ isNow: hour === isNowHour }"
            v-for="hour in hours"
            :key="hour"
          >
            <span class="day-hours-fill">{{ hour }}</span>
            <div class="hours-content">
              <div class="event-list">
                <div v-for="event in eventsArr" :key="event.startTime">
                  <div
                    v-if="
                      day.clickDateCheck === event.day &&
                      compareStringHours(
                        hour,
                        event.startTime,
                        event.timeAsNumber
                      )
                    "
                    class="event"
                    :style="{ height: 59 * event.timeAsNumber + 'px' }"
                  >
                    <span>{{ event.startTime }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import WeekDays from "../common/WeekDays.vue";
import TimeLine from "../common/TimeLine.vue";
export default {
  name: "WeekContent",
  props: {
    month: Number,
    weeks: Array,
    year: Number,
    currentDay: Number,
    isWeekActive: Boolean,
    weekIndex: Number,
    eventsArr: Array,
  },
  components: {
    WeekDays,
    TimeLine,
  },
  mounted() {
    this.getHours();
  },
  data() {
    return {
      hours: [
        "all&nbsp;day",
        "00:00",
        "01:00",
        "02:00",
        "03:00",
        "04:00",
        "05:00",
        "06:00",
        "07:00",
        "08:00",
        "09:00",
        "10:00",
        "11:00",
        "12:00",
        "13:00",
        "14:00",
        "15:00",
        "16:00",
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00",
        "23:00",
      ],
      isNowHour: "",
      hour: new Date().getHours(),
      isNowMin: 0,
      heightIndexOfEvent: 1,
      currentMonth: new Date().getMonth(),
    };
  },
  methods: {
    compareStringHours(hour, eventHour, height) {
      this.heightIndexOfEvent = height;
      return hour.slice(0, 2) === eventHour.slice(0, 2);
    },
    getHours() {
      const date = new Date();
      const hour =
        date.getHours().toString().length < 2
          ? "0" + date.getHours()
          : date.getHours();
      const min = date.getMinutes();
      this.isNowHour = `${hour}:00`;
      this.isNowMin = min;
    },
  },
};
</script>

<style lang="less" scoped>
.weekdays-wrapper {
  display: flex;

  .weekdays {
    flex-grow: 1;
  }
}
.hours-wrapper {
  display: flex;
}
.days {
  position: relative;
  width: 100%;
  display: flex;
  flex-group: 1;
}
.padding-block {
  background-color: #f5f6fa;
  color: #f5f6fa;
  font-size: 0.8125rem;
  font-weight: 400;
  text-align: center;
  padding: 21px;
}
.day-week {
  width: calc(100% / 7);
  overflow-y: hidden;

  &:not(:last-child) {
    border-right: 1px solid #eaf0f4;
  }
}
.hours-item {
  border-right: 1px solid #eaf0f4;
}
.hours {
  background-color: inherit;
  color: #4d4f5c;

  &:not(:last-child) {
    border-bottom: 1px solid #eaf0f4;
  }
}
.day-hours {
  position: relative;
  &:last-child {
    border-right: none;
  }
  &-fill {
    visibility: hidden;
  }
  &:hover,
  &:focus {
    background-color: #fcfcfc;
  }
}
.hours-content {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

  .event-list {
    .event {
      position: relative;
      z-index: 1;
      background-color: #3b86ff;
      color: #3b86ff;
      border-radius: 4px;
      padding: 7px 14px;
      text-align: left;

      span {
        font-weight: 700;
        font-size: 0.85rem;
        color: #ffffff;
      }
    }
  }
}
.current {
  background-color: #f5f6fa;
}
.now {
  font-weight: 700;
}
</style>

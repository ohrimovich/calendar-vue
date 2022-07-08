<template>
  <div class="days">
    <div
      :days="days"
      :weeks="weeks"
      v-for="(_, week) of weeks.length"
      :key="week"
      class="week"
    >
      <div
        :day="day"
        :month="month"
        :year="year"
        v-for="i in weeks[week]"
        :key="i.numberDay"
        class="day"
        :class="{ current: day === i.numberDay && month === currentMonth }"
        @click="$emit('showModal', i.numberDay, month, year)"
      >
        <span 
        class="day-number"
        :class="{lightGray: !i.inCurrentMonthDay}"
        >{{ i.numberDay }}
        </span>
      <div 
      :eventsArr='eventsArr'
      v-for="event in eventsArr"
      :key="event.startTime"
      ><span 
       class='event'
      v-if='getClickedDay(i.numberDay, month, year) === event.day'
      >{{event.startTime}}</span></div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    days: Array,
    day: Number,
    weeks: Array,
    month: Number,
    year: Number,
    eventsArr: Array,
    
  },
  data() {
    return {
      currentMonth: new Date().getMonth(),
    };
  },
  computed: {
 
  },
  methods: {
    getClickedDay(day, month, year) {
      return `${day + "/" + month + "/" + year}`
    },

  }
};
</script>

<style lang="less" scoped>
.days {
    display: flex;
    flex-wrap: wrap;
}

.week {
    display: flex;
    width: 100%;

    &:not(:last-child) {
        border-bottom: 1px solid #eaf0f4;
    }
}

.day {
    box-sizing: border-box;
    width: calc(100% / 7);
    min-height: 140px;
    text-align: right;
    transition: all 0.3s ease-in-out;
    
    &:not(:last-child) {
      border-right: 1px solid #eaf0f4;
    }

    &:hover,
    &:focus {
        background-color: #fcfcfc;
    }

    &-number {
        display: block;
        padding: 10px;
        font-size: 0.75rem;
    }
}

.current {
    background-color: #f5f6fa;
}
.event {
    font-weight: 700;
    display: inherit; 
    background-color: #3b86ff;
    color: #ffffff;
    border-radius: 4px;
    padding: 7px 14px;
    text-align: left;
    margin-bottom: 1px;

}
.lightGray {
    color: rgba(67,66,93,.3);
}


</style>

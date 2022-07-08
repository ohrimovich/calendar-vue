<template>
  <div class="header">
    <div class="actions">
      <div class="left">
        <ButtonComponent @click.native="$emit('todayClick')"
          >Today</ButtonComponent
        >
        <ButtonComponent @click.native="$emit('decrementClick')"
          >Back</ButtonComponent
        >
        <ButtonComponent @click.native="$emit('incrementClick')"
          >Next</ButtonComponent
        >
      </div>
      <div class="right">
        <ButtonComponent
          @click.native="$emit('monthClick')"
          :class="{ isActive: isMonthActive }"
          >Month</ButtonComponent
        >
        <ButtonComponent
          @click.native="$emit('weekClick')"
          :class="{ isActive: isWeekActive }"
          >Week</ButtonComponent
        >
        <ButtonComponent
          @click.native="$emit('dayClick')"
          :class="{ isActive: isDayActive }"
          >Day</ButtonComponent
        >
      </div>
    </div>
    <div class="header__title-wrapper">
      <h3 :year="year" class="header-title">{{ setTitle() }}</h3>
    </div>
  </div>
</template>

<script>
import ButtonComponent from "../common/ButtonComponent.vue";
export default {
  name: "CalendarHeader",
  components: {
    ButtonComponent,
  },
  props: {
    month: Number,
    year: Number,
    weeks: Array,
    weekIndex: Number,
    decrementClick: Function,
    incrementClick: Function,
    isMonthActive: Boolean,
    isWeekActive: Boolean,
    isDayActive: Boolean,
    days: Array,
    dayIndex: Number,
  },
  data() {
    return {
      months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
    };
  },
  computed: {
    currentWeek() {
      return this.weeks[this.weekIndex];
    },
  },
  methods: {
    setTitle() {
      if (this.isMonthActive) {
        return `${this.months[this.month]} ${this.year}`;
      } else if (this.isWeekActive) {
        let firstDate = this.currentWeek[0];
        let lastDate = this.currentWeek[this.currentWeek.length - 1];

        return `${firstDate.monthDay} - ${lastDate.monthDay}`;
      } else if (this.isDayActive) {
        let day = this.days[this.dayIndex];
        let dayName = new Date(
          this.year,
          this.month,
          day.numberDay
        ).toLocaleDateString("en", { weekday: "long" });
        let dayDate = day.monthDay;
        return `${dayName} ${dayDate}`;
      }
    },
  },
};
</script>

<style lang="less" scoped>
.actions {
  display: flex;
  justify-content: space-between;
}
.left,
.right {
  .button:not(:last-child) {
    border-right: none;
  }
  .button:first-child {
    border-bottom-left-radius: 4px;
    border-top-left-radius: 4px;
  }
  .button:last-child {
    border-bottom-right-radius: 4px;
    border-top-right-radius: 4px;
  }
}
.header-title {
  font-size: 1.125rem;
  font-weight: 400;
}
.isActive {
  color: #3b86ff;
  background-color: #fcfcfc;
}
</style>

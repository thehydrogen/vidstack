import { StoreFactory, type Store } from 'maverick.js';

export const SliderStoreFactory = new StoreFactory<SliderState>({
  min: 0,
  max: 100,
  value: 50,
  pointerValue: 0,
  focused: false,
  dragging: false,
  pointing: false,
  get interactive() {
    return this.dragging || this.focused || this.pointing;
  },
  get fillRate() {
    return calcRate(this.min, this.max, this.value);
  },
  get fillPercent() {
    return this.fillRate * 100;
  },
  get pointerRate() {
    return calcRate(this.min, this.max, this.pointerValue);
  },
  get pointerPercent() {
    return this.pointerRate * 100;
  },
});

function calcRate(min: number, max: number, value: number) {
  const range = max - min,
    offset = value - min;
  return range > 0 ? offset / range : 0;
}

export interface SliderStore extends Store<SliderState> {}

export interface SliderState {
  /**
   * The current slider value.
   */
  value: number;
  /**
   * The value at which the device pointer is pointing to inside the slider.
   */
  pointerValue: number;
  /**
   * The minimum slider value.
   */
  min: number;
  /**
   * The maximum slider value.
   */
  max: number;
  /**
   * Whether the slider has keyboard focus.
   */
  focused: boolean;
  /**
   * Whether the slider thumb is currently being dragged.
   */
  dragging: boolean;
  /**
   * Whether a device pointer is within the slider bounds.
   */
  pointing: boolean;
  /**
   * Whether the slider is being interacted with via keyboard or pointer device.
   */
  readonly interactive: boolean;
  /**
   * The current value to range ratio.
   *
   * @signal
   * @example
   * `min` = 0
   * `max` = 10
   * `value` = 5
   * `range` = 10 (max - min)
   * `fillRate` = 0.5 (result)
   */
  readonly fillRate: number;
  /**
   * The fill rate expressed as a percentage (`fillRate * 100`).
   */
  readonly fillPercent: number;
  /**
   * The pointer value to range ratio.
   */
  readonly pointerRate: number;
  /**
   * The pointer rate expressed as a percentage (`pointerRate * 100`).
   */
  readonly pointerPercent: number;
}

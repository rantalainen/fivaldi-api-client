export class RateLimiter {
  /** Amount of current tokens */
  private tokens: number;
  /** Timestamp of the last refill */
  private lastRefill: number;
  /** Rate at which tokens are replenished (tokens per second) */
  private replenishRate: number;
  /** Maximum burst capacity (max tokens that can be used in one second) */
  private burstCapacity: number;

  /**
   * Creates a new RateLimiter instance.
   * @param replenishRate Rate at which tokens are replenished (tokens per second).
   *                      This is updated from API headers after each request.
   *                      Default is 2 tokens per second.
   * @param burstCapacity Maximum burst capacity (max tokens that can be used in one second).
   *                      This is updated from API headers after each request.
   *                      Default is 10 tokens.
   */
  constructor(replenishRate = 2, burstCapacity = 10) {
    this.replenishRate = replenishRate;
    this.burstCapacity = burstCapacity;
    this.tokens = burstCapacity; // start full
    this.lastRefill = Date.now();
  }

  private refillTokens() {
    const now = Date.now();
    const elapsedSeconds = (now - this.lastRefill) / 1000;
    const tokensToAdd = elapsedSeconds * this.replenishRate;

    this.tokens = Math.min(this.tokens + tokensToAdd, this.burstCapacity);
    this.lastRefill = now;
  }

  /**
   * Waits until the rate limiter has enough tokens available to proceed.
   * @returns A promise that resolves when the rate limiter has enough tokens available to proceed.
   */
  public async waitUntilAvailable(): Promise<void> {
    while (true) {
      this.refillTokens();

      if (this.tokens >= 3) {
        this.tokens -= 1;
        return;
      }

      const timeToNextTokenMs = 1000 / this.replenishRate;
      await new Promise((resolve) => setTimeout(resolve, timeToNextTokenMs));
    }
  }

  /**
   * Updates the rate limiter's settings based on the headers from the API response.
   * @param headers Headers from the API response to update the rate limiter's settings.
   */
  public updateFromHeaders(headers: Record<string, string | number | undefined>) {
    const newRate = parseFloat(headers['x-ratelimit-replenish-rate'] as string);
    const newBurst = parseFloat(headers['x-ratelimit-burst-capacity'] as string);
    const remaining = parseFloat(headers['x-ratelimit-remaining'] as string);

    if (!isNaN(newRate) && newRate > 0) {
      this.replenishRate = newRate;
    }

    if (!isNaN(newBurst) && newBurst > 0) {
      this.burstCapacity = newBurst;
    }

    if (!isNaN(remaining)) {
      this.tokens = Math.min(remaining, this.burstCapacity);
    }

    this.lastRefill = Date.now();
  }
}

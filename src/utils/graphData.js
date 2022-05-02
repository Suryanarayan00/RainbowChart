
import gaussian from 'gaussian'

function weightedRandom(mean, variance) {
  var distribution = gaussian(mean, variance)
  return distribution.ppf(Math.random())
}

export function generateRandomGraphData(length) {
  return Array(length)
    .fill(0)
    .map((_, index) => ({
      date: new Date(index),
      value: weightedRandom(10, Math.pow(index + 1, 2)),
    }))
}

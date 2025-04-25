import React from 'react'

const page2 = () => {
  return (
    <div>
        <section class="generator-form" id="generator">
    <h2>Tell us about you</h2>
    <form>
      <input type="text" id="goal" placeholder="Your Goal" required />
      <select id="experience">
        <option value="beginner">Beginner</option>
        <option value="intermediate">Intermediate</option>
        <option value="advanced">Advanced</option>
      </select>
      <button type="button" onclick="generatePath()">Generate Path</button>
    </form>
  </section>

  <section class="output" id="output"></section>

    </div>
  )
}

export default page2
/* eslint-disable dot-notation */
const data = {
  msg1: 'Evil programer be like',
  msg2: 'Goodbye world'
};

export default function somePractice() {
  console.log('--- somePractice\n');
  const {msg1, msg2} = data;
  console.log(msg1);
  console.log(msg2);
  
}

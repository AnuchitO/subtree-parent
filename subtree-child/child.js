const doSomething = (newparam) => {
  console.log(`new param ${newparam}`)
  console.log('this is a child subtree')
  console.log('udpate subtree 1')
}

exports.doSomething = doSomething

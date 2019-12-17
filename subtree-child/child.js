const doSomething = (newparam, moreparam) => {
  console.log(`new param ${newparam}:${moreparam}`)
  console.log('this is a child subtree')
  console.log('udpate subtree 1')
}

exports.doSomething = doSomething

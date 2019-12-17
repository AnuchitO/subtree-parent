const doSomething = (newparam, moreparam, ownChange) => {
  console.log(`new param ${newparam}::::${moreparam}:::${ownChange}`)
  console.log('this is a child subtree')
  console.log('udpate subtree 1')
}

exports.doSomething = doSomething

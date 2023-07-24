function solution(new_id) {
  let answer = "";
  function tryStep1(id, tryStep2) {
    let changedId = id.toLowerCase();

    if (tryStep2) {
      tryStep2(changedId, tryStep3);
    }
  }

  function tryStep2(id, tryStep3) {
    let changedId = id.replace(/[^\w-_.]/g, "");
    console.log("step2 id", changedId);

    if (tryStep3) {
      tryStep3(changedId, tryStep4);
    }
  }

  function tryStep3(id, tryStep4) {
    let changedId = id.replace(/\.{2,}/g, ".");
    console.log("step3 id", changedId);

    if (tryStep4) {
      tryStep4(changedId, tryStep5);
    }
  }

  function tryStep4(id, tryStep5) {
    let changedId = id.replace(/^\.|\.$/g, "");
    console.log("step4", changedId);

    tryStep5(changedId, tryStep6);
  }

  function tryStep5(id, tryStep6) {
    let changedId = id === "" ? "a" : id;
    console.log("step5", changedId);

    tryStep6(changedId, tryStep7);
  }

  function tryStep6(id, tryStep7) {
    let changedId = id.length > 15 ? id.slice(0, 15) : id;

    if (changedId[changedId.length - 1] === ".") {
      changedId = changedId.slice(0, -1);
    }

    console.log("step6", changedId);
    tryStep7(changedId);
  }

  function tryStep7(id) {
    if (id.length <= 2) {
      const last = id[id.length - 1];
      let changedId = id;
      for (let i = 0; i < 3; i++) {
        if (changedId.length === 3) break;
        changedId += last;
      }
      console.log("step7", changedId);
      answer = changedId;
    } else {
      console.log("step7", id);
      answer = id;
    }
  }

  tryStep1(new_id, tryStep2);
  return answer;
}

solution("abcdefghijklmn.p");

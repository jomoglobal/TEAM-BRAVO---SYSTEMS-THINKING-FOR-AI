
(function(){
  const KEY = "bravo_deploy_spec_v1";
  function getSpec(){
    try{ return JSON.parse(localStorage.getItem(KEY) || "{}"); }catch(e){ return {}; }
  }
  function setSpec(obj){
    localStorage.setItem(KEY, JSON.stringify(obj, null, 2));
  }
  window.BravoSpec = { getSpec, setSpec, KEY };
})();

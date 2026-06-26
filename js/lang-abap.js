hljs.registerLanguage('abap', function(hljs) {
  var KEYWORDS = {
    $pattern: /[A-Za-z_#][\w\d_]*/,
    keyword: 'abap abstract accept according activate actual add after alias align all alphanumeric analytical and append archive area as ascending aspect assign association at authority authorization authorization_check avg back backup before begin between binary block bound break browser but by calculation call cancel case cast cds chain change changing check class classification clean clear client cloud coalesce collect column columns commit communication comparing compile compiler component components composite composition compression concat condition configuration connect connection constants consumption context contract control conversion copy count create creating cross cube currency currency_code current cursor customer customizing data database datacategory date day ddic deactivate deallocate dec decimal decimals declarations deep default deferred define definition delete deleting department dependent depth desc descending describe description destination detail details directory disconnect display distinct divide draft drop dummy duplicate duration during dynamic each edit element elements else empty enable enabling end endcase enddo endenhancement endexec endform endfunction enhancement endif endloop endmethod endmodule endprogram endselect endtry endwhile engineering entity entry enum equivalent error escape event events exact exception exceptions exec execute exists exit explicit export exposure express extend extended extension external extract fail fallback false field fields file filter final find first fixed float flush following footer for form format forward found frame free from function functionality function_import generate generated get giving global goto grant grid group handle handler harmless having header headers help hierarchy high hold hour icon id identification identifier if ignore immediately implementation implemented implicit import including inclusive index indexes indicator infotype inheriting initial inner input insert instance inteface integer intensified interface internal interval into invalid invoke is isolation job join json keep key keys keyword kind language last layer leading leave left length less level levels like line lines list load loading local locale location log logical long loop low main maintain maintenance major managed mapping mask master match matchcode max maximum member members mesh message messages method methods min minimum minor minute mode model modification modify module month multiple multiplicity name names native navigation nested new next no node nodes non not null number numeric occurrence occurs of off on only open operation operations option optional options or order organization other others outer output over overlay package padding page paging parameter parameters parent part path pattern percentage perform performance person pfcd pfcg preferred preserve primary print privileged privileges procedure processing product profile program projection property protocol provider proxy public purge purpose put qualifier quantity query queue range rank rap raw read reader read_only reads receive receiver records redirect reduce ref reference refresh regex register reject relation release remote rename repeat replace replication report request require required reserve reset resolution resource response restore result results resume retain retrieval return returning reuse reverse revoke right role rollback root round routine row rows run safe saving scale scenario schema score screen scroll search second secondary seconds secure security segment select selection select_options semantics send separate sequence serial serializable server service session set shared shift short sign signature simple single size skip small some sort sorted source space specified split sql standard start statement static statistics status stop storage store string structure style sub submatch subscreen submesh substring subtract suffix sum summary supplement supply support suppress switch symbol syncpoints syntax system table tables target task tasks technical test text than then throw time times timestamp to token top trace tract transaction transfer transformation transport trigger trim true truncate try turn type types typing ui unassign under unit units universal unknown unnest unpack until unwind update updating upgrade url usage use user using valid validate validation value values vary vdm version via view virtual visibility wait warning web week when where while width window with without work write writer xml year zero zone',
    built_in: 'abap.char abap.numc abap.string abap.int4 abap.int8 abap.dec abap.float16 abap.hex abap.boolean abap.dats abap.tims abap.utclong string int4 int8 dec float char numc clnt cust lang boolean dats tims utclong'
  };

  var ANNOTATION = {
    className: 'doctag',
    begin: /@\w+(?:\.\w+)*(?:\s*:\s*'[^']*'|\s*:\s*#[A-Z_]+|\s*:\s*true|\s*:\s*false)?/,
    relevance: 0
  };

  var STRING = {
    className: 'string',
    begin: /'/,
    end: /'/,
    contains: [{begin: /''/}],
    relevance: 0
  };

  var NUMBER = {
    className: 'number',
    begin: /\b\d+(?:\.\d+)?(?:\.\d+)?\b/,
    relevance: 0
  };

  var COMMENT_BLOCK = {
    className: 'comment',
    variants: [
      {begin: /\/\*/, end: /\*\//},
      {begin: /"/, end: /$/}
    ]
  };

  var OPERATORS = {
    className: 'operator',
    begin: /=>|->|\|/
  };

  return {
    name: 'ABAP CDS',
    aliases: ['abapcds'],
    case_insensitive: true,
    keywords: KEYWORDS,
    contains: [
      ANNOTATION,
      COMMENT_BLOCK,
      STRING,
      NUMBER,
      OPERATORS,
      {
        className: 'symbol',
        begin: /:/
      }
    ]
  };
});

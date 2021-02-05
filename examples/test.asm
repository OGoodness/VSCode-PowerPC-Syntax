{namespace soy.examples.simple}


{template .helloName}
  {@param? name: string}
  {if $name}
    {msg desc="Says hello to a person."}
      Hello {$name}!
    {/msg}
  {else}
    {call .helloWorld /}
  {/if}
{/template}


{template .helloNames}
  {@param names: list<string>}
  {for $name in $names}
    {call .helloName}
      {param name: $name /}
    {/call}
    {if not isLast($name)}
      <br>
    {/if}
  {ifempty}
    {call .helloWorld /}
  {/for}
{template}

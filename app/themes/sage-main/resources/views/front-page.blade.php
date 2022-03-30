@extends('layouts.app')

@section('content')
<!-- @include('partials.discover')
@include('partials.victory')
@include('partials.favorite')
@include('partials.gitf-card')
@include('partials.users')
@include('partials.faq') -->

  @while(have_posts()) @php the_post() @endphp
    @include('partials.page-header')
    @include('partials.content-page')
  @endwhile

@include('partials.gitf-card')
@include('partials.users')
@include('partials.faq') 

@endsection

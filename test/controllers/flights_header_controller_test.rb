require 'test_helper'

class FlightsHeaderControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get flights_header_index_url
    assert_response :success
  end

end
